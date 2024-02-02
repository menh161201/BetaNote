'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import * as actions from '@/actions';

export default function DashboardPage() {
    const {data,status} = useSession();
    if(status !== 'authenticated') {
        redirect('/')
    }
    
    return (
        <div>
            {JSON.stringify(data.user)}
            <form action={actions.signOut}>
                <button className="border p-1">Sign Out</button>
            </form>
            
        </div>
    )
}