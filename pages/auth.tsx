/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useState } from 'react'
import Image from 'next/image'
import Inputs from '@/components/Inputs'
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';

export default function auth() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // console.log(email);

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])


  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      })
      router.push('/');
    }
    catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);



  return (
    <div className='relative h-full w-full bg-[url(/images/hero.jpg)] bg-center bg-fixed bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>

          <Image src='/images/logo.png' alt='Logo' width={250} height={12} className='' />

        </nav>

        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 p-16 self-center mt-3 lg:w-2/5 lg:max-w-md rounded-2xl w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold font-serif text-center'>

              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4 '>
              {variant === 'register' && (
                <Inputs
                  label="Username"
                  onChange={(e: any) => { setUsername(e.target.value) }}
                  id="name"
                  type='name'
                  value={name}
                />
              )}
              <Inputs
                label="Email"
                onChange={(e: any) => { setEmail(e.target.value) }}
                id="email"
                type='email'
                value={email}
              />
              <Inputs
                label="Password"
                onChange={(e: any) => { setPassword(e.target.value) }}
                id="password"
                type='password'
                value={password}
              />
            </div>
            <button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div onClick={() => signIn('google', { callbackUrl: '/' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={32} />
              </div>
              <div onClick={() => signIn('github', { callbackUrl: '/' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FaGithub size={32} />
              </div>
            </div>
            <p className='text-neutral-500 mt-12'>
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account'}
              <span onClick={toggleVariant} className='text-white ml-2 hover:underline cursor-pointer'>
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
