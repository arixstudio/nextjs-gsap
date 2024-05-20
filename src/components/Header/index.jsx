import React from 'react'
import Link from 'next/link';

export default function Index() {
  return (
    <div className='flex gap-6 p-10 z-10 fixed'>
        <Link scroll={false} href="/">Home</Link>
        <Link scroll={false} href="/sample">Sample page</Link>
    </div>
  )
}
