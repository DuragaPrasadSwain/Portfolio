import Image from 'next/image'
import React from 'react'
import res from '../../../public/Screenshot2024-03-10234458.png'


const page = () => {
  return (
    <div className='flex justify-center'>
      <Image src={res} alt='resume'/> 
    </div>
  )
}

export default page
