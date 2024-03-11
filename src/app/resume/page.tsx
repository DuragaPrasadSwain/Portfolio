import Image from 'next/image'
import React from 'react'
import res from '../../../public/Screenshot 2024-03-10 234458.png'


const page = () => {
  return (
    <div className='flex justify-center'>
      <Image src={res} alt='resume'/> 
    </div>
  )
}

export default page
