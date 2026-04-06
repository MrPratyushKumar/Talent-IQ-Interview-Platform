import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react'
import toast from 'react-hot-toast'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../lib/axios.js';

function HomePage() {
  return <div>
    <button className="btn btn-secondary"  onClick={() => toast.success("This is a success toast")}>Click me</button>
    <SignedOut>
      <SignInButton mode='modal'>
        <button className="btn btn-secondary">Login</button>

      </SignInButton>
    </SignedOut>
     
    <SignedIn>
      <SignOutButton></SignOutButton>
    </SignedIn>
  </div>
}

export default HomePage