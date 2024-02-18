import  { useState } from 'react'
import Image from 'next/image'
import Inputs from '@/components/Inputs'

export default function auth() {

  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  console.log(email);

  return (
    <div className='relative h-full w-full bg-[url(/images/hero.jpg)] bg-center bg-fixed bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>

          <Image src='/images/logo.png' alt='Logo' width={250} height={12} className=''/>

        </nav>

        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 p-16 self-center mt-3 lg:w-2/5 lg:max-w-md rounded-2xl w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold text-center'>
               Sign In
            </h2>
            <div className='flex flex-col gap-4 '>
              <Inputs 
              label="Username"
              onChange={(e : any)=>{setUsername(e.target.value)}}
              id="username"
              type='name'
              value ={username}
               />
              <Inputs 
              label="Email"
              onChange={(e :any)=>{setEmail(e.target.value)}}
              id="email"
              type='email'
              value ={email}
               />
              <Inputs 
              label="Password"
              onChange={(e : any)=>{setPassword(e.target.value)}}
              id="password"
              type='password'
              value ={password}
               />
            </div>
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
