import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className=' select-none flex flex-col items-center justify-center h-screen '> 
    <div className=' relative'>
    {/* <div className='normal_900 text-9xl text-red-600'>404</div> */}
    <div className='normal_900 text-[18rem] text-red-600'>404</div>
      <div className='bg-black w-[40rem] text-white absolute normal_900 text-6xl top-[43%] px-12 uppercase'> <span>page not found</span></div>
    </div>
      
      <Link href={'/'} className='bg-neutral-900 p-5 rounded-3xl shadow-lg shadow-red-950 border border-red-950 text-red-600 hover:scale-105  normal_900 uppercase' ><span>return home</span></Link>
    </div>
  )
}

export default notFound
