import { lazy, Suspense } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./pages/ProblemsPage";

// Stream's video + chat SDKs are heavy, so only load them for the session route
const SessionPage = lazy(() => import("./pages/SessionPage"));

function App() {
  const { isSignedIn, isLoaded } = useUser();

  // this will get rid of the flickering effect
  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route
          path="/session/:id"
          element={
            isSignedIn ? (
              <Suspense fallback={<div className="flex min-h-dvh items-center justify-center bg-base-200"><span className="loading loading-ring loading-lg" /></div>}>
                <SessionPage />
              </Suspense>
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;