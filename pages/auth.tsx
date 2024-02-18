import React from 'react'
import Image from 'next/image'
import Inputs from '@/components/Inputs'

export default function auth() {
  return (
    <div className='relative h-full w-full bg-[url(/images/hero.jpg)] bg-center bg-fixed bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>

          <Image src='/images/logo.png' alt='Logo' width={250} height={12} className=''/>

        </nav>

        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 p-16 self-center mt-3 lg:w-2/5 lg:max-w-md rounded-xl w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold text-center'>
               Sign In
            </h2>
            <div className='flex flex-col gap-4'>
              <Inputs/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
