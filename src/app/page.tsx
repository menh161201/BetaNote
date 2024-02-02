'use client';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const {status} = useSession();
  if (status === 'authenticated') {
    redirect('/dashboard')
  }
  return (
    <div>
      <form action={actions.signIn}>
        <button className='border p-1'>Sign In</button>
      </form>
    </div>
  );
}
