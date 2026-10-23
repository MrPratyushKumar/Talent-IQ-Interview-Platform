import {
  Code2Icon,
  MessagesSquareIcon,
  PlayIcon,
  ShieldCheckIcon,
  TerminalIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { PROBLEMS } from "../data/problems";

const FEATURES = [
  {
    icon: VideoIcon,
    title: "Face-to-face pairing",
    body: "Start a 1-on-1 session and talk while you code. Video and chat live inside the same window as the editor.",
  },
  {
    icon: Code2Icon,
    title: "A real editor, three languages",
    body: "Monaco with JavaScript, Python and Java starter code for every problem - the same editor you use locally.",
  },
  {
    icon: PlayIcon,
    title: "Run and know",
    body: "Every problem ships with expected output. Run your code and see immediately whether the cases pass.",
  },
  {
    icon: MessagesSquareIcon,
    title: "Interview, not just solve",
    body: "One host, one candidate, one shared workspace. Designed around how technical interviews actually happen.",
  },
];

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="size-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <TerminalIcon className="size-6 text-primary-content" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-mono font-bold text-xl tracking-wider text-base-content">
          Talent IQ
        </span>
        <span className="text-xs text-base-content/60">Code Together</span>
      </span>
    </span>
  );
}

function HomePage() {
  const problems = Object.values(PROBLEMS);

  return (
    <div className="min-h-dvh bg-base-200">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 btn btn-primary btn-sm"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn btn-ghost btn-sm">Sign in</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-primary btn-sm">Get started</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <span className="text-sm text-base-content/60">You are signed in</span>
            </SignedIn>
          </div>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
                <ZapIcon className="size-3.5" aria-hidden="true" />
                Live pair-programming interviews
              </p>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-base-content sm:text-6xl">
                Interview the way
                <span className="block font-mono text-primary">engineers actually work.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-base-content/70">
                Talent IQ puts two people in one room: a shared Monaco editor, video, chat and
                real test feedback. Solve {problems.length} curated problems together instead of
                staring at a blank doc.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <SignUpButton mode="modal">
                  <button className="btn btn-primary btn-lg gap-2 cursor-pointer">
                    <TerminalIcon className="size-5" aria-hidden="true" />
                    Start practicing free
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="btn btn-lg btn-ghost gap-2 cursor-pointer">
                    I already have an account
                  </button>
                </SignInButton>
              </div>

              <p className="mt-5 flex items-center gap-2 text-sm text-base-content/50">
                <ShieldCheckIcon className="size-4" aria-hidden="true" />
                Sign-in is handled by Clerk. No password to manage.
              </p>
            </div>

            {/* editor mock */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-base-300 bg-base-200 px-4 py-3">
                  <span className="size-3 rounded-full bg-error/70" aria-hidden="true" />
                  <span className="size-3 rounded-full bg-warning/70" aria-hidden="true" />
                  <span className="size-3 rounded-full bg-success/70" aria-hidden="true" />
                  <span className="ml-3 font-mono text-xs text-base-content/60">
                    two-sum.js — shared session
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-base-content/40">{"// you + your partner\n"}</span>
                    <span className="text-secondary">{"function"}</span>
                    {" "}<span className="text-primary">{"twoSum"}</span>
                    {"(nums, target) {\n"}
                    {"  "}
                    <span className="text-base-content/40">{"// both typing, same buffer\n"}</span>
                    {"  "}
                    <span className="text-secondary">{"return"}</span>
                    {" nums.flatMap((a, i) =>\n"}
                    {"    nums.map((b, j) => (i < j && a + b === target ? [i, j] : [])).flat()\n"}
                    {"  );\n}}\n\n"}
                    <span className="text-success">{"✓ 3/3 test cases passed"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-t border-base-300 bg-base-100">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-3xl font-bold text-base-content">Everything in one room</h2>
            <p className="mt-2 max-w-2xl text-base-content/60">
              No tab-switching between a call, an editor and a chat window.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-base-300 bg-base-200 p-6 transition-colors duration-200 hover:border-primary/40"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-base-content">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-base-content/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM LINEUP */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-base-content">The problem set</h2>
              <p className="mt-2 text-base-content/60">
                Classic interview questions, each with starter code in three languages.
              </p>
            </div>
            <p className="font-mono text-sm text-base-content/50">{problems.length} problems</p>
          </div>

          <ul className="mt-8 divide-y divide-base-300 overflow-hidden rounded-2xl border border-base-300 bg-base-100">
            {problems.map((problem) => (
              <li
                key={problem.id}
                className="flex flex-wrap items-center justify-between gap-3 px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <UsersIcon className="size-4 text-base-content/40" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-base-content">{problem.title}</p>
                    <p className="text-sm text-base-content/50">{problem.category}</p>
                  </div>
                </div>
                <span
                  className={`badge badge-outline ${
                    problem.difficulty === "Easy"
                      ? "badge-success"
                      : problem.difficulty === "Medium"
                        ? "badge-warning"
                        : "badge-error"
                  }`}
                >
                  {problem.difficulty}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="border-t border-base-300 bg-base-100">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <h2 className="text-3xl font-bold text-base-content">
              Set up your first session in under a minute
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base-content/60">
              Pick a problem, share the room, and start writing code with someone else in the
              editor.
            </p>
            <div className="mt-8 flex justify-center">
              <SignUpButton mode="modal">
                <button className="btn btn-primary btn-lg cursor-pointer">
                  Create your account
                </button>
              </SignUpButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-base-300 bg-base-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-base-content/50">
          <span className="font-mono">Talent IQ — pair-programming interviews</span>
          <span className="flex items-center gap-2">
            <Code2Icon className="size-4" aria-hidden="true" />
            Built with React, Vite, Clerk, Stream and Judge0
          </span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
