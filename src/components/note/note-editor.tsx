'use client';
import Tiptap from "../tiptap"
import { db } from "@/db"
import EditNoteForm from "./edit-note-form"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { CiShoppingTag } from "react-icons/ci";
import type { NoteWithData } from "@/db/queries/notes";
import CreateTagForm from "../tag/create-tag-form"
import { Note, Tag } from "@prisma/client"
import { useState } from "react";
import { Input } from "../ui/input";
import { useFormState } from "react-dom";
import * as actions from '@/actions';
import { Button } from "../ui/button";

interface NoteEditorProps {
    note: NoteWithData,
    tags: Tag[]
}

export default function NoteEditor({note,tags}:NoteEditorProps) {
    const [formState, action] = useFormState(actions.renameNote.bind(null,note.id), {error: {}})
    const [isEdit, setIsEdit] = useState(false)
    
    const  handleDoubleClick = () => {
        setIsEdit(true)
    }
    const  handleBlur = () => {
        setIsEdit(false)
    }
    
    return (
        <div className="flex flex-col min-h-screen max-h-screen xl:p-4 pt-14 px-4">
            <div className="flex gap-2 justify-end mb-2">
                <div className="flex items-center gap-6 mr-auto">
                    <div onDoubleClick={handleDoubleClick}>
                        {isEdit ? 
                        <form action={action} className="flex gap-2" onSubmit={handleBlur}>
                            <Input name="title" defaultValue={note.title} />
                            <Button type="submit">Rename</Button>
                        </form>
                        
                        :
                        <h1 className="font-bold text-2xl">{note.title}</h1>
                        }
                    </div>
                    
                    <div className="flex gap-2 items-center text-sm">
                        <CiShoppingTag className="scale-x-[-1]"/>
                        {note.tags.map((tag,index) => (
                            <div key={index} className="border max-w-max p-[.15rem] rounded-md shadow-md">
                                {tag.name}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* <CreateTagForm noteId={note.id} tags={tags}/> */}
                <EditNoteForm noteId={note.id} state={note.isFavorited} tags={tags} noteTitle={note.title}/>
            </div>
            <div className="overflow-scroll">
                <Tiptap note={note} />
            </div>
            
        </div>
    )
}