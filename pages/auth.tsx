import  { useCallback, useState } from 'react'
import Image from 'next/image'
import Inputs from '@/components/Inputs'

export default function auth() {

  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  // console.log(email);

  const [variant,setVariant] = useState('');

  const toggleVariant = useCallback(()=>{
    setVariant((currentVariant) => currentVariant === 'login' ? 'register':'login')
  },[])

  return (
    <div className='relative h-full w-full bg-[url(/images/hero.jpg)] bg-center bg-fixed bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>

          <Image src='/images/logo.png' alt='Logo' width={250} height={12} className=''/>

        </nav>

        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 p-16 self-center mt-3 lg:w-2/5 lg:max-w-md rounded-2xl w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold text-center'>
               
               {variant === 'login'? 'Sign in' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4 '>
              {variant === 'register' &&(
              <Inputs 
              label="Username"
              onChange={(e : any)=>{setUsername(e.target.value)}}
              id="username"
              type='name'
              value ={username}
               />
               )}
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
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <p className='text-neutral-500 mt-12'>
              {variant==='login' ? 'First time using Netflix?': 'Already have an account'}
              <span onClick={toggleVariant} className='text-white ml-2 hover:underline cursor-pointer'>
              {variant==='login'? 'Create an account' : 'Login' }
            </span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
