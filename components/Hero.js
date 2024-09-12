import { Fugaz_One } from 'next/font/google';
import React from 'react'
import Button from './Button';
import Calendar from './Calendar';
import Link from 'next/link';
import CallToAction from './CallToAction';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});


export default function Hero() {
  return (
    <div className='py-10 md:py-10 flex flex-col gap-8 sm:gap-10 '>
      <h1 className={'text-5xl text-center sm:text-text-6xl md:text-7xl ' + fugaz.className}><span className='textGradient'>Broodl</span> helps you track you <span className='textGradient'>daily</span> mood!</h1>
      <p className='text-lg sm:text-xlg md:text-2xl text-center w-full mx-auto max-w-[600px]'>Create your mood record and see how you feel on <span className='font-medium'>every day of every year.</span></p>
      
      <CallToAction/>
      <Calendar demo/>
    </div>
  )
}
