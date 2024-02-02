'use client';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const {status} = useSession();
  if (status === 'authenticated') {
    redirect('/home')
  }
  return (
    <div>
      <form action={actions.signInGithub}>
        <button className='border p-1'>Sign In Github</button>
      </form>
      <form action={actions.signInGoogle}>
        <button className='border p-1'>Sign In Google</button>
      </form>
    </div>
  );
}
