
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react'
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import ProblemsPage from './pages/ProblemsPage'
import { Navigate } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import DashboardPage from './pages/DashboardPage'

function App() {
  const {isSignedIn , isLoaded} = useUser();
  // this will get rid of flickering effect
  if(!isLoaded) return null;
  return (
    <>
    <Routes>
    <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"}/>}/>
    <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"}/>}/>

    <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"}/>}/> 
    </Routes>
    <Toaster position='top-left' toastOptions={{duration:3000}} />
    </>
  )
}

export default App


