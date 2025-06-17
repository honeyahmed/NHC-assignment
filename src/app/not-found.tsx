import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image src="/not-found.svg" alt="Not found" width={200} height={250} />
        <p className='text-2xl font-bold'>Page not found</p>
        <Link href="/" className='text-blue-500'>Go back to home</Link>
    </div>
  )
}
