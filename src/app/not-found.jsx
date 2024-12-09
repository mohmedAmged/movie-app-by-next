import React from 'react'
import notFoundImg from '../app/images/404-error.jpg'
import Image from 'next/image'
export default function notFound() {
  return (
    <div className='flex dark:bg-gray-900 justify-center items-center w-100'>
      <Image style={{width: '100%', height:"100vh", objectFit:'contain'}} src={notFoundImg} alt='not-foun-image' />
    </div>
  )
}
