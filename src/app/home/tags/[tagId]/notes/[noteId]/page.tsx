import { Suspense } from "react";
import NoteEditor from "@/components/note/note-editor";
import NoteEditorSkeleton from "@/components/skeleton/note-editor-skeleton";
import { auth } from "@/auth";
import { db } from "@/db";
import { redirect } from "next/navigation";

interface NotePageProps {
    params: {
        noteId: string
    }
}

export default async function NotePage({params}:NotePageProps) {
    const session = await auth();
    if (!session || !session.user) {
        redirect('/');
    }
    const {noteId} = params;
    const note = await db.note.findFirst({
        where: {
            id: noteId
        },
        include: {
            tags: {
                select: {
                    name: true
                }
            },
           
        }
    }) 
    if (!note) {
        return null
    }
    const tags = await db.tag.findMany({
        where: {
            userId: session.user.id
        }
    })
    if(!tags) {
        return null
    }

    return (
        <div>
            <Suspense fallback={<NoteEditorSkeleton />}>
                <NoteEditor note={note} tags={tags}/>
            </Suspense>
        </div>
    )
}