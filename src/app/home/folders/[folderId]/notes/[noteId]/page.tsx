import { Suspense } from "react";
import NoteEditor from "@/components/note/note-editor";
import NoteEditorSkeleton from "@/components/skeleton/note-editor-skeleton";


interface NotePageProps {
    params: {
        noteId: string
    }
}

export default function NotePage({params}:NotePageProps) {
    const {noteId} = params;
    
    return (
        <div>
            <Suspense fallback={<NoteEditorSkeleton />}>
                <NoteEditor noteId={noteId}/>
            </Suspense>
        </div>
    )
}