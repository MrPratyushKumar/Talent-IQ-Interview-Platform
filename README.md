# 🧠 Talent IQ — Live Pair-Programming Interview Platform

**Create an interview room, hop on a video call with the candidate, and solve real algorithm
problems in a shared Monaco editor — with code that actually runs.**

🔗 **Live app:** https://talent-iq-interview-platform-7f47.onrender.com
📦 **Monorepo:** `backend/` (Express 5 API) + `frontend/` (React 19 + Vite)

---

## Table of contents

1. [What it does](#1-what-it-does)
2. [Architecture at a glance](#2-architecture-at-a-glance)
3. [Feature walkthroughs (one diagram each)](#3-feature-walkthroughs-one-diagram-each)
4. [Data model](#4-data-model)
5. [API surface](#5-api-surface)
6. [Tech stack](#6-tech-stack)
7. [Run it locally](#7-run-it-locally)
8. [Environment variables](#8-environment-variables)
9. [How it is deployed](#9-how-it-is-deployed)
10. [Project structure](#10-project-structure)
11. [Known limitations](#11-known-limitations)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. What it does

| Feature | What you can actually do | Where |
| --- | --- | --- |
| 🔐 Account & auth | Sign up / sign in with email, Google or GitHub (Clerk). A matching row is created in MongoDB automatically. | `/` |
| 📊 Dashboard | See live counts of active rooms and your finished rooms, browse everyone's open sessions, reopen your history. | `/dashboard` |
| ➕ Interview rooms | Create a 1:1 session by picking a problem + difficulty. You get a shareable `/session/:id` URL. | `/dashboard` |
| 🎥 Video call | Real WebRTC call with mic/camera/screen-share controls and a participant counter. | `/session/:id` |
| 💬 Session chat | Side panel chat that only room members can see, with threads. | `/session/:id` |
| ⌨️ Code editor | Monaco (the VS Code editor) with JavaScript, Python and Java, pre-filled starter code. | `/problem/:id`, `/session/:id` |
| ▶️ Run code | Submissions execute server-side through Judge0 and print real stdout/stderr in the output panel. | same |
| ✅ Auto test check | Output is compared to the problem's expected output — confetti + toast when it matches. | `/problem/:id` |
| 🧩 Problem bank | 5 curated problems with statement, examples, constraints and 3 language stubs each. | `/problems` |

```mermaid
flowchart LR
    U(["Talent IQ"])
    U --> A["Auth"]
    U --> P["Practice"]
    U --> S["Sessions"]
    A --> A1["Clerk sign-in"]
    A --> A2["Auto user sync to DB"]
    A --> A3["Protected API routes"]
    P --> P1["5 problems, 3 languages"]
    P --> P2["Monaco editor"]
    P --> P3["Judge0 execution"]
    P --> P4["Pass / fail check"]
    S --> S1["Create & join rooms"]
    S --> S2["WebRTC video"]
    S --> S3["Team chat"]
    S --> S4["End & archive"]

    style U fill:#1f2c24,stroke:#7ac74f,color:#fff
    style A fill:#23342a,stroke:#7ac74f,color:#fff
    style P fill:#23342a,stroke:#7ac74f,color:#fff
    style S fill:#23342a,stroke:#7ac74f,color:#fff
```

---

## 2. Architecture at a glance

One React SPA is served by one Express API. The API is the only place that talks to MongoDB,
Stream, Inngest and Judge0 — the browser holds **no** privileged secrets.

```mermaid
flowchart TB
    subgraph Browser["Browser — React 19 SPA"]
        UI["Pages: Home · Dashboard · Problems · Session"]
        STATE["React Query + router state"]
        MONACO["Monaco editor"]
        VIDEO["Stream Video & Chat SDKs"]
        UI --- STATE
        STATE --- MONACO
        STATE --- VIDEO
    end

    subgraph API["Express 5 API - single service"]
        AUTH["protectRoute middleware"]
        SESS["/api/sessions"]
        CHAT["/api/chat/token"]
        CODE["/api/code/execute"]
        ING["/api/inngest - event functions"]
        RUN["Judge0 runner lib"]
    end

    subgraph Cloud["Managed services"]
        CLERK["Clerk - identity + JWT"]
        ATLAS["MongoDB Atlas"]
        STREAM["Stream - video & chat"]
        INNGEST["Inngest - webhook events"]
        JUDGE0["Judge0 community API"]
    end

    UI -->|"axios /api, cookies attached"| AUTH
    AUTH -->|"verifies JWT"| CLERK
    AUTH --> SESS
    AUTH --> CHAT
    AUTH --> CODE
    SESS --> ATLAS
    SESS --> STREAM
    CHAT --> STREAM
    VIDEO <-->|"WebRTC + WebSocket"| STREAM
    MONACO -->|"code + language"| CODE
    CODE --> RUN --> JUDGE0
    CLERK -->|"clerk/user.created"| INNGEST --> ING
    ING --> ATLAS
    ING --> STREAM

    style Browser fill:#16211b,stroke:#7ac74f,color:#d6e9c8
    style API fill:#1c2a33,stroke:#5aa9e6,color:#d6e9f7
    style Cloud fill:#2a2416,stroke:#e5c07b,color:#f5e6c8
```

**Why this shape**

* **Single deployable.** In production Express also serves `frontend/dist`, so there is one URL,
  one cold start, and same-origin requests — no CORS puzzle on the free tier.
* **Secrets stay server-side.** `STREAM_API_SECRET` and the DB password never reach the browser;
  the client only ever receives a short-lived Stream *token* minted by `/api/chat/token`.
* **Server-side execution.** Judge0's free host throttles browser-originated POSTs until they hang,
  so execution is proxied through `/api/code/execute` with a serial queue.

---

## 3. Feature walkthroughs (one diagram each)

### 3.1 Authentication and automatic user sync

Clerk owns identity. Our database owns app data. `protectRoute` is the bridge, and it *provisions
on demand* — that is what makes a brand-new signup work instantly, even before the webhook lands.

```mermaid
sequenceDiagram
    autonumber
    participant B as Browser
    participant C as Clerk
    participant E as Express API
    participant M as MongoDB
    participant I as Inngest

    B->>C: sign in / sign up
    C-->>B: session JWT + user profile
    B->>E: GET /api/sessions/active (cookie)
    E->>E: clerkMiddleware() decodes JWT
    E->>E: requireAuth() rejects 401 if no valid token
    E->>M: User.findOne({ clerkId })
    alt no row yet - first request after signup
        E->>C: users.getUser(clerkId)
        E->>M: User.create(...)  (unique index absorbs races)
        E->>E: upsertStreamUser(...)
    end
    E->>E: req.user = found user
    E-->>B: 200 sessions
    Note over I,M: In parallel, Clerk sends clerk/user.created to /api/inngest<br/>and the sync-user function upserts the same document.
```

```mermaid
flowchart TD
    Q["Incoming /api/* request"] --> V{"Valid Clerk JWT?"}
    V -- "no" --> R401["401 Unauthorized"]
    V -- "yes" --> L["Look up user by clerkId"]
    L --> F{"Row exists?"}
    F -- "no" --> P["Provision from Clerk profile<br/>+ register in Stream"]
    P --> W{"Duplicate key race?"}
    W -- "yes" --> G["Re-read the winner"]
    W -- "no" --> A2["Use new row"]
    F -- "yes" --> A1["Use existing row"]
    G --> ATT["Attach req.user"]
    A1 --> ATT
    A2 --> ATT
    ATT --> OK["Handler runs"]

    style R401 fill:#3a1f1f,stroke:#e06c75,color:#fff
    style OK fill:#1f3a26,stroke:#7ac74f,color:#fff
```

### 3.2 Interview session lifecycle

A session is a tiny state machine with two states. Everything else — the video call, the chat
channel — is created and destroyed alongside it, using the same `callId` as the join key.

```mermaid
stateDiagram-v2
    state "active" as ACT
    state "completed" as DONE
    [*] --> ACT : host creates the room
    ACT --> ACT : guest joins and is added to the chat channel
    ACT --> DONE : host ends the session
    DONE --> [*] : guest is sent back to the dashboard

    note right of ACT
        POST /api/sessions
        creates the Mongo document
        getOrCreate the Stream call
        creates the chat channel
    end note

    note left of DONE
        PATCH /api/sessions/:id/end
        hard-deletes the call and the channel
        history becomes visible on the dashboard
    end note
```

```mermaid
sequenceDiagram
    autonumber
    participant H as Host browser
    participant E as Express API
    participant M as MongoDB
    participant S as Stream
    participant G as Guest browser

    H->>E: POST /api/sessions {problem, difficulty}
    E->>E: callId = session_timestamp_random
    E->>M: Session.create({problem, difficulty, host, callId})
    E->>S: video.call("default", callId).getOrCreate()
    E->>S: chat.channel("messaging", callId).create()
    E-->>H: 201 session
    H->>H: navigate to /session/:id
    H-->>G: share the URL
    G->>E: GET /api/sessions/:id (polled every 5 s)
    G->>E: POST /api/sessions/:id/join
    E->>M: participant = guestId
    E->>S: channel.addMembers([guestClerkId])
    E-->>G: 200 session
    par media
        H->>S: WebRTC
        G->>S: WebRTC
    and chat
        H->>S: messages on the same channel
        G->>S: messages on the same channel
    end
    G->>E: PATCH /api/sessions/:id/end
    Note over E: only the host passes this check - 403 otherwise
    E->>S: delete call (hard) + delete channel
    E->>M: status = completed
    G->>G: poll sees completed -> redirect to /dashboard
```

Guardrails baked into `joinSession` / `endSession`:

| Situation | Result |
| --- | --- |
| Session does not exist | `404` |
| Joining a completed room | `400 Cannot join a completed session` |
| Host "joins" their own room | `400` |
| Room already has a participant | `409 Session is full` |
| Non-host tries to end the room | `403 Only the host can end the session` |

### 3.3 Live video and chat

The browser never learns the Stream **secret**. It asks the API for a per-user token, then opens
two independent Stream connections on the same `callId`: one for media, one for messaging.

```mermaid
flowchart LR
    A["SessionPage mounts with callId"] --> B["GET /api/chat/token"]
    B --> C["server: chatClient.createToken(clerkId)"]
    C --> D["token + userId + name + image"]
    D --> E["StreamVideoClient"]
    D --> F["StreamChat client"]
    E --> G["call(default, callId).join({create:true})"]
    F --> H["channel(messaging, callId).watch()"]
    G --> I["SpeakerLayout + CallControls"]
    H --> J["MessageList + MessageInput + Thread"]
    I --> K(["Page leaves -> videoCall.leave(), disconnectUser(), cleanup"])
    J --> K

    style C fill:#1c2a33,stroke:#5aa9e6,color:#fff
    style K fill:#23342a,stroke:#7ac74f,color:#fff
```

The init effect depends on `session.callId` and `session.status` **primitives**, not the session
object — the session is polled every 5 seconds, and re-running on a fresh object would tear down
and re-join the call on every poll.

### 3.4 Running code (server-side Judge0 proxy)

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant M as Monaco editor
    participant F as axios /api
    participant B as POST /api/code/execute
    participant Q as Serial queue
    participant J as ce.judge0.com

    U->>M: writes solution, picks language
    M->>F: executeCode(language, code)
    F->>B: { language: "python", code: "..." }
    B->>B: validate language, non-empty code, max 20000 chars
    B->>Q: schedule submission (one at a time, 700 ms apart)
    Q->>J: POST /submissions?base64_encoding=false&wait=true
    Note over J: language_id: JS 97 · Python 92 · Java 91
    J-->>B: { status, stdout, stderr, compile_output }
    B->>B: status.id != 3 (Accepted) or stderr -> success:false
    B-->>F: { success, output } or { success:false, error }
    F-->>M: OutputPanel renders green stdout or red error
```

Design details worth knowing:

* **Why not run it in the browser?** Only JS could run there, and the free Judge0 host drops
  browser-originated POSTs. A server proxy fixes both.
* **Why a queue?** `ce.judge0.com` is a shared, keyless endpoint; bursts get rate-limited. Requests
  run one at a time with ~700 ms spacing.
* **Why a 60 s `AbortSignal.timeout`?** A hung submission would otherwise wedge the serial queue and
  every later request behind it.
* **Why `resolveSubmission`?** `wait=true` can still return a queued submission; the poll loop
  re-reads by `token` until `status.id > 2` (up to 15 attempts).
* **Java gotcha:** Judge0 runs `java Main`, so every Java stub declares `class Main`.

### 3.5 Problem bank and automatic pass detection

```mermaid
flowchart TD
    S["PROBLEMS map in src/data/problems.js"] --> L["Language select"]
    L --> K{"problemId : language changed?"}
    K -- "yes" --> T["Load that language's starterCode<br/>clear previous output"]
    K -- "no" --> E["Keep what the user typed"]
    T --> R["Run Code"]
    E --> R
    R --> O["{ success, output }"]
    O --> P{"success?"}
    P -- "no" --> ERR["Red error text"]
    P -- "yes" --> CMP["normalize whitespace and line endings,<br/>compare with expectedOutput of that language"]
    CMP -- "match" --> WIN["🎉 confetti + 'All tests passed!'"]
    CMP -- "differ" --> FAIL["'Tests failed. Check your output!'"]

    style WIN fill:#1f3a26,stroke:#7ac74f,color:#fff
    style FAIL fill:#3a1f1f,stroke:#e06c75,color:#fff
    style ERR fill:#3a1f1f,stroke:#e06c75,color:#fff
```

The editor reset happens **during render** by comparing a derived `editorKey` instead of inside a
`useEffect` — React 19's `react-hooks/set-state-in-effect` rule flags the effect version, and the
render-time comparison also saves a wasted render pass.

### 3.6 Dashboard

```mermaid
flowchart TB
    D["DashboardPage"] --> Q1["useActiveSessions<br/>GET /api/sessions/active"]
    D --> Q2["useMyRecentSessions<br/>GET /api/sessions/my-recent"]
    Q1 --> SC["StatsCards: live rooms + your finished rooms"]
    Q2 --> SC
    Q1 --> AS["ActiveSessions list - Join button,<br/>disabled/badge if you are already inside"]
    Q2 --> RS["RecentSessions history"]
    D --> MOD["CreateSessionModal: problem + difficulty"]
    MOD --> C["useCreateSession -> POST /api/sessions"]
    C --> NAV["navigate /session/:id"]

    style D fill:#23342a,stroke:#7ac74f,color:#fff
    style NAV fill:#23342a,stroke:#7ac74f,color:#fff
```

`/dashboard?create=1` opens the create modal immediately — that is how "Practice this problem with
someone" CTAs deep-link into room creation.

---

## 4. Data model

Two collections. Deliberately small: identity lives in Clerk, media lives in Stream, and the DB
only stores what the app itself needs.

```mermaid
erDiagram
    USER ||--o{ SESSION : "hosts"
    USER ||--o{ SESSION : "joins as participant"

    USER {
        objectid id PK "Mongo _id"
        string clerkId UK "Clerk user id, also the Stream user id"
        string name
        string email UK
        string profileImage
        date createdAt "timestamps true"
        date updatedAt
    }

    SESSION {
        objectid id PK "Mongo _id"
        string problem "title, matched against PROBLEMS on the client"
        string difficulty "enum easy, medium, hard"
        objectid host FK "ref User"
        objectid participant FK "ref User, null until someone joins"
        string status "enum active or completed"
        string callId "used as both the Stream call id and channel id"
        date createdAt
        date updatedAt
    }
```

| Rule | Enforced by |
| --- | --- |
| One document per Clerk account | unique index on `clerkId` (and `email`) |
| Difficulty is a closed set | Mongoose `enum: ["easy","medium","hard"]` |
| A room holds at most one guest | `if (session.participant) → 409` |
| History only shows finished rooms | query `status: "completed"`, `$or: [host, participant]` |
| Lists are bounded | `.sort({createdAt:-1}).limit(20)` |

> `Session.problem` stores the human-readable **title**, and the client resolves it back to a full
> problem object with `Object.values(PROBLEMS).find(p => p.title === session.problem)`.

---

## 5. API surface

Every `/api/*` route below sits behind `protectRoute` and returns `401` without a valid Clerk JWT.

| Method | Path | Body / params | Returns | Notes |
| --- | --- | --- | --- | --- |
| `POST` | `/api/sessions` | `{problem, difficulty}` | `201 {session}` | also creates the Stream call + channel |
| `GET` | `/api/sessions/active` | – | `200 {sessions[]}` | last 20, host & participant populated |
| `GET` | `/api/sessions/my-recent` | – | `200 {sessions[]}` | your last 20 completed rooms |
| `GET` | `/api/sessions/:id` | – | `200 {session}` / `404` | polled every 5 s by the session page |
| `POST` | `/api/sessions/:id/join` | – | `200 {session}` | `400` / `409` per the guardrails above |
| `PATCH` | `/api/sessions/:id/end` | – | `200 {session, message}` | host only, `403` otherwise |
| `GET` | `/api/chat/token` | – | `200 {token, userId, userName, userImage}` | `503` if Stream keys are absent |
| `POST` | `/api/code/execute` | `{language, code}` | `200 {success, output}` or `{success:false, error}` | `400` on missing input or >20 000 chars |
| `POST` | `/api/inngest` | Inngest events | – | `sync-user`, `delete-user-from-db` |
| `GET` | `/health` | – | `200 {msg}` | unauthenticated liveness probe |

---

## 6. Tech stack

### Frontend
| Tool | Role |
| --- | --- |
| React 19 + Vite 8 | UI and bundling (rolldown) |
| React Router 7 | routing with guard-based redirects |
| `@clerk/clerk-react` | auth UI, `useUser`, `<UserButton>` |
| TanStack React Query 5 | caching, mutations, polling |
| Tailwind CSS 4 + daisyUI 5 | `forest` theme, cards/badges/buttons |
| `@monaco-editor/react` | VS Code editor in the browser |
| `@stream-io/video-react-sdk`, `stream-chat-react` | call + chat widgets |
| `canvas-confetti`, `react-hot-toast` | feedback |
| `react-resizable-panels` | draggable split between problem and editor |
| `lucide-react`, `date-fns` | icons, relative timestamps |

### Backend
| Tool | Role |
| --- | --- |
| Express 5 (ESM) | HTTP API and static SPA host |
| Mongoose 9 | models and queries |
| `@clerk/express` | `clerkMiddleware`, `requireAuth`, admin client |
| `inngest` | event functions for Clerk webhooks |
| `@stream-io/node-sdk`, `stream-chat` | server-side call/channel/user management |
| `cors`, `dotenv` | origin policy, config |
| `mongodb-memory-server` (dev) | embedded Mongo for offline work |
| `nodemon` (dev) | auto-restart on `npm run dev` |

---

## 7. Run it locally

**Requirements:** Node.js ≥ 20.

### Option A — fully local, no Atlas needed (recommended)

```bash
# 1. install everything
cd backend  && npm install
cd ../frontend && npm install
cd ..

# 2. backend on an embedded MongoDB (port 27018, data kept in backend/.mongo-data)
cd backend && npm run dev:local     # -> http://localhost:3000

# 3. frontend in another terminal
cd frontend && npm run dev          # -> http://localhost:5173
```

`vite.config.js` proxies `/api` to `http://localhost:3000`, so no API URL has to be configured.
You still need `backend/.env` with Clerk keys for sign-in; without Stream keys the API starts and
answers `503 Video & chat are not configured on this server` instead of crashing.

### Option B — against real Atlas

Put your Atlas string in `backend/.env` as `DB_URL`, then `npm run dev` (nodemon) in `backend/`.

```mermaid
flowchart LR
    A["npm run dev:local"] --> B["scripts/dev-local-db.js"]
    B --> C["MongoMemoryServer on 127.0.0.1:27018<br/>dbPath = backend/.mongo-data"]
    C --> D["sets process.env.DB_URL"]
    D --> E["import src/server.js"]
    E --> F["API on :3000, data survives restarts"]
    G["npm run start"] --> H["reads DB_URL from .env / Render"]
```

### Build & lint

```bash
npm run build --prefix frontend   # emits frontend/dist
npm run lint  --prefix frontend   # eslint
NODE_ENV=production npm run start --prefix backend  # serves API + dist on one port
```

---

## 8. Environment variables

Copy these names into `backend/.env` and `frontend/.env`. Both files are **gitignored — never commit them.**

### `backend/.env`
| Variable | Required | Purpose |
| --- | --- | --- |
| `PORT` | no (default 3000) | listen port; Render sets this for you |
| `DB_URL` | yes | `mongodb+srv://user:pass@cluster0.<hash>.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` |
| `NODE_ENV` | prod only | `production` turns on static SPA serving + strict CORS |
| `CLIENT_URL` | prod only | the single allowed cross-origin client |
| `CLERK_PUBLISHABLE_KEY` | yes | Clerk browser key |
| `CLERK_SECRET_KEY` | yes | lets the API read Clerk profiles |
| `STREAM_API_KEY` / `STREAM_API_SECRET` | for video & chat | server-side Stream credentials |
| `INNGEST_EVENT_KEY` | for webhooks | Inngest function auth |
| `INNGEST_SIGNING_KEY` | for webhooks | verifies inbound Clerk events |

### `frontend/.env`
| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_CLERK_PUBLISHABLE_KEY` | yes | browser auth (build-time, safe to expose) |
| `VITE_STREAM_API_KEY` | for video & chat | public half of the Stream pair |
| `VITE_API_URL` | no | defaults to `/api`; set only when API and client are separate hosts |

---

## 9. How it is deployed

One Render service runs both halves: the build step compiles the SPA, Express then serves
`frontend/dist` and the API from the same origin.

```mermaid
flowchart TB
    subgraph Render["Render free service"]
        direction TB
        B1["Build: install backend, install frontend with dev deps, vite build"]
        S1["Start: node src/server.js on PORT from env"]
        B1 --> S1
    end
    DEV["Developer git push to main"] --> Render
    Render --> AT["MongoDB Atlas M0<br/>cluster0.xxxx.mongodb.net"]
    S1 -->|"GET /health"| HB["Render health check"]
    USER["Visitor"] -->|"https://...onrender.com"| S1
    S1 -->|"server-side"| J0["ce.judge0.com"]
    CL["Clerk dashboard"] -->|"clerk/user.created"| IN["Inngest"] --> S1
```

| Setting | Value |
| --- | --- |
| Runtime | Node ≥ 20 |
| Build command | `npm run build` (root) |
| Start command | `npm run start` (root) |
| Health check path | `/health` |
| Env vars | the `backend/.env` names above, plus `VITE_*` ones at build time |

⏳ **Free-tier cold start is ~70 s** — the first request after idle spins. The instance also sleeps
when unused, so video calls are best demoed right after a page load.

---

## 10. Project structure

```
Talent-IQ/
├── package.json              # root build/start scripts (what Render runs)
├── backend/
│   ├── scripts/dev-local-db.js   # embedded MongoDB for offline dev
│   └── src/
│       ├── server.js         # express app, CORS, Clerk, routes, SPA static host, DB retry
│       ├── lib/
│       │   ├── db.js         # mongoose.connect + log
│       │   ├── env.js        # single typed-ish view of process.env
│       │   ├── stream.js     # Stream clients + user upsert/delete (null-safe)
│       │   ├── inngest.js    # sync-user / delete-user-from-db
│       │   └── judge0.js     # server-side code runner + serial queue
│       ├── middleware/protectRoute.js  # auth + on-demand user provisioning
│       ├── models/User.js · Session.js
│       ├── controller/sessionController.js · chatController.js · codeController.js
│       └── routes/sessionRoutes.js · chatRoutes.js · codeRoutes.js
└── frontend/
    ├── vite.config.js        # /api proxy for local dev
    └── src/
        ├── main.jsx          # Clerk + React Query + Router providers
        ├── App.jsx           # guarded routes; SessionPage is lazy-loaded
        ├── api/sessions.js   # one axios call per endpoint
        ├── hooks/useSessions.js · useStreamClient.js
        ├── lib/axios.js · stream.js · judge0.js · utils.js
        ├── data/problems.js  # PROBLEMS + LANGUAGE_CONFIG
        ├── pages/HomePage · DashboardPage · ProblemsPage · ProblemPage · SessionPage
        └── components/Navbar · WelcomeSection · StatsCards · ActiveSessions ·
            RecentSessions · CreateSessionModal · ProblemDescription ·
            CodeEditorPanel · OutputPanel · VideoCallUI
```

`SessionPage` is the only lazy route — it pulls in the Stream video and chat SDKs, so keeping it out
of the main bundle makes the landing page and dashboard load faster.

---

## 11. Known limitations

* **Free Judge0 endpoint is rate-limited and cold.** Runs are queued serially; a burst of users will
  see slow results. Swap in a keyed Judge0 (or Piston/self-hosted) deployment for scale.
* **No test harness beyond stdout comparison.** "Tests passed" means normalized output matches the
  expected string — it is not hidden-test grading.
* **Rooms are 1 host + 1 guest.** The schema allows more; the UI and Stream channel do not.
* **Code is not persisted.** Each poll/refetch resets only on problem or language change; closing the
  tab loses the buffer. No collaborative cursor sharing either.
* **Problem bank is client-side** (`src/data/problems.js`); adding a problem means redeploying.
* **Free Render/Mongo tiers sleep** and Clerk's development instance has MAU limits.

### Sensible next steps
1. Move the problem bank to MongoDB with a seed script, and add hidden test cases.
2. Persist last code per user + session; add real-time collaborative editing.
3. Store session transcripts / recordings in Stream and show them on the dashboard.
4. Add a runner abstraction so Judge0 can be replaced by one env var.
5. Playwright coverage for create → join → run → end.

---

## 12. Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Blank page, `/health` also down | Render cold start or crash-loop | Check logs for `MongoDB connection attempt N failed`, then reload after ~70 s |
| `bad auth : Authentication failed` | Atlas password/IP allowlist mismatch | Regenerate the DB user password (**Edit → Confirm → Update User**), then update `DB_URL` |
| Video/chat fail with 503 | `STREAM_API_KEY`/`STREAM_API_SECRET` missing | Add both to the backend environment |
| "Failed to join video call" toast | `VITE_STREAM_API_KEY` missing at **build** time | Add it and redeploy — Vite inlines env vars during the build |
| Run Code hangs a long time | shared Judge0 queue / cold compile | Wait; if it 429s, space out runs |
| Java run reports a class error | stub renamed from `class Main` | Keep `class Main` — Judge0 executes `java Main` |
| Login succeeds but dashboard errors | user row never provisioned | Signed-out → in again; `protectRoute` creates the row on the first API call |
| `npm run dev:local` won't restart after edits | it is plain `node`, no watcher | stop it and re-run, or use `npm run dev` with a real `DB_URL` |

---

**License:** ISC · Built as a portfolio project — README diagrams are Mermaid, rendered natively by GitHub.
