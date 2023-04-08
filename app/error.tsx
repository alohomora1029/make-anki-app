'use client'
import Link from 'next/link'
import React from 'react'

export default function Custom404() {
  return (
    <div className='flex justify-center flex-col text-center '>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Home</Link>
    </div>
    
  )
}
