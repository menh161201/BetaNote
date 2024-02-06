
import {auth} from '@/auth';
import { redirect } from "next/navigation";



export default async function HomePage() {
    const session = await auth();
    if (!session || !session.user) {
        redirect('/')
    }

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className='font-light text-3xl'>
                Welcome to Note
            </div>
            <img src="/note-placeholder.png" alt="" />  
        </div>
        
    )
}