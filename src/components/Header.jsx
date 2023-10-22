import Image from 'next/image'
import React from 'react'
import logo from '@/assets/React.png'

const Header = () => {
  return (
    <div className='bg-[#4553B1] flex justify-start items-center px-10 space-x-4 h-48 text-white'>
      <Image 
      src={logo}
      alt='React logo'
      priority
      height={0}
      width={0}
      className="w-auto h-24"
      />
      <h1 className='font-bold text-xl'>Welcome to Todo list module!</h1>
    </div>
  )
}

export default Header