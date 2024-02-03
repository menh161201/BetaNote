import NoteList from "@/components/note/note-list";
import { fetchNoteByFolderId } from "@/db/queries/notes";
import FolderListSkeleton from "@/components/skeleton/folder-list-skeleton";
import { Suspense } from "react";
import { db } from "@/db";
import EditFolderForm from "./edit-folder-form";
import { Button } from "../ui/button";
import * as action from '@/actions';
import { CiFolderOn } from "react-icons/ci";
import { PlusCircledIcon } from "@radix-ui/react-icons";

interface FolderPageProps {
    params: {
        folderId: string
    }
}


export default async function FolderPage({params}:FolderPageProps) {
    const {folderId} = params;
    
    const folder = await db.folder.findFirst({
        where: {
            id: folderId
        }
    })
    if (!folder) {
        return null
    }
    const CreateNoteFunc = action.CreateNote.bind(null, folderId);
    return (
        <div className='xl:min-h-screen xl:max-h-screen overflow-scroll p-4 min-h-max w-[300px] border-r'>
            <div className='mb-2 flex items-center'>
                <div>
                    <h1 className='font-bold text-3xl flex items-center gap-2'><CiFolderOn />{folder.title}</h1>
                    {folder.createdAt.toLocaleDateString()}
                    
                </div>
                
                
                </div>
                
                <div className='flex justify-between gap-2'>
                <form action={CreateNoteFunc}>
                    <Button variant='outline' className="mb-2 w-full gap-2 shadow-md"><PlusCircledIcon />Create Note</Button>
                </form>
                
                <EditFolderForm folderId={folderId} state={folder.isStarred} folderTitle={folder.title}/>
            </div>
            <Suspense fallback={<FolderListSkeleton />}>
                <NoteList fetchData={() => fetchNoteByFolderId(folderId)}/>
            </Suspense>
            
        </div>
    )
}