'use client';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export default function Home() {
  const {status} = useSession();
  if (status === 'authenticated') {
    redirect('/home')
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-3'>
      <h1 className='text-6xl font-black'>WELCOME TO NOTE</h1>
      <h3 className='text-2xl text-slate-500'>Simple . Robust . Modern</h3>
      {/* <img src="/NOTE-large.svg" alt="" /> */}
      <div className='flex gap-2 mt-4'>
        <form action={actions.signInGithub}>
          <Button className='border p-1 flex items-center gap-1 bg-black'><FaGithub />Sign In Github</Button>
        </form>
        <form action={actions.signInGoogle}>
          <Button className='border p-1 flex items-center gap-1' variant='outline'><FaGoogle />Sign In Google</Button>
        </form>
      </div>
      <div className='text-sm text-slate-500'>
        Minh Nguyen @ 2024
      </div>
    </div>
  );
}
