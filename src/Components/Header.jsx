import React from 'react'
import { FaApple } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className='w-full h-20 flex justify-between px-5 items-center bg-gray-100 shadow-xl'>
        <div className='flex justify-around items-center '>
          <FaApple/>
          <h1 className='text-4xl'> I PLANET</h1>
        </div>
        <div>
          <ul className='flex gap-5'>
            <li>Mobiles</li>
            <li>Laptops</li>
          </ul>
        </div>
      </div>
    </>
  )
}
