'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link';
import React from 'react'
import Button from './Button';

export default function CallToAction() {
    const {currentUser} = useAuth();
    if(currentUser){
        return (
            <div className='mx-w-[600px] mx-auto w-full'>
                <Link href={'/Dashboard'}>
                    <Button dark full text="Go to dashboard"/>
                </Link>
            </div>
        )
    }
  return (
    <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
        <Link href={'/Dashboard'}>
          <Button text="Sign_up"/>
        </Link>
        <Link href={'/Dashboard'}>
          <Button text="Login" dark/>
        </Link>
        
      </div>
  )
}
