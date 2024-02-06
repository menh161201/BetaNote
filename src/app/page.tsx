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
      <img src="/NOTE-large.svg" alt="" />
      <form action={actions.signInGithub}>
        <Button className='border p-1 flex items-center gap-1'><FaGithub />Sign In Github</Button>
      </form>
      <form action={actions.signInGoogle}>
        <Button className='border p-1 flex items-center gap-1'><FaGoogle />Sign In Google</Button>
      </form>
    </div>
  );
}
