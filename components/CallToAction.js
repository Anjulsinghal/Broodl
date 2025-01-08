'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link';
import React from 'react'
import Button from './Button';

export default function CallToAction() {
  const { currentUser, login } = useAuth();
  const demoEmail = process.env.NEXT_PUBLIC_DEMO_EMAIL;
  const demoPassword = process.env.NEXT_PUBLIC_DEMO_PASSWORD;

  // Function to handle the Demo-AC button click
  const handleDemoClick = async () => {
    if (!demoEmail || !demoPassword) {
      console.error("Demo credentials are missing in environment variables.");
      alert("Demo credentials are not set up. Please contact support.");
      return;
    }

    try {
      console.log("Attempting demo login...");
      await login(demoEmail, demoPassword); // Use login function with demo credentials
      alert("Logged in as Demo User!");
    } catch (err) {
      console.error("Demo login failed:", err.message);
      alert("Failed to login as Demo User. Please try again later.");
    }
  };
  if (currentUser) {
    return (
      <div className='mx-w-[600px] mx-auto w-full'>
        <Link href={'/Dashboard'}>
          <Button dark full text="Go to dashboard" />
        </Link>
      </div>
    )
  }
  return (
    <div className='grid grid-cols-3 gap-4 w-fit mx-auto'>
        <Link href={'/Dashboard'}>
          <Button text="Login"/>
        </Link>
        <Link href={'/Dashboard'}>
          <Button text="Sign_up" dark/>
        </Link>
        <Button text="Demo-AC" clickHandler={handleDemoClick} light />
        
      </div>
  )
}
