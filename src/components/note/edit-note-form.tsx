'use client';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import * as actions from '@/actions';

import { DotsVerticalIcon,TrashIcon,Pencil2Icon,HeartFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useFormState } from "react-dom";
import type { Tag } from "@prisma/client";

import CreateTagForm from "../tag/create-tag-form";

interface EditFolderFormProps {
    noteId: string,
    state: boolean,
    tags: Tag[],
    noteTitle: string
}

export default function EditNoteForm({noteId,state,tags,noteTitle}:EditFolderFormProps) {

    const deleteNoteFunc = actions.deleteNote.bind(null, noteId);
    const starNoteFunc = actions.starNote.bind(null, noteId);
    const [isPress, setIsPress] = useState(state)
    const toggleStar = () => {
        setIsPress(!isPress)
    }
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline' size='sm'><DotsVerticalIcon /></Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-max mt-4" side="left">
                <div className="flex gap-2 flex-col">
                    
                    <CreateTagForm noteId={noteId} tags={tags}/>
                    <form action={starNoteFunc}>
                        <Button variant='ghost' className="border shadow-md w-full" onClick={toggleStar}>
                            {isPress && <div className="flex items-center gap-2"><HeartFilledIcon className="text-red-500"/>Favorites</div>}
                            {!isPress && <div className="flex items-center gap-2"><HeartFilledIcon />Favorites</div>}
                            
                        </Button>
                        
                    </form>
                    
                    
                    <form action={deleteNoteFunc}>
                        <Button variant='destructive' className="gap-2 w-full"><TrashIcon />Delete</Button>
                    </form>
                </div>
            </PopoverContent>
        </Popover>    
         
    )
}