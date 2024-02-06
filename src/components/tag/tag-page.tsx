import { db } from "@/db";
import Link from "next/link";
import { paths } from "@/path";
import { CiShoppingTag } from "react-icons/ci";
import { ReaderIcon } from "@radix-ui/react-icons";
import FolderListSkeleton from "@/components/skeleton/folder-list-skeleton";
import { Suspense } from "react";

interface TagPageProps {
    tagId: string
}

export default async function TagPage({tagId}:TagPageProps) {
    const tag = await db.tag.findFirst({
        where: {
          id: tagId
        },
        include: {
          notes: {
            select: {
              id: true,
              title: true
            }
          }
        }
      })
    if(!tag) {
        return null
    }
    return (
        <div className='xl:min-h-screen xl:max-h-screen overflow-scroll p-4 min-h-max  xl:w-[300px] xl:border-r'>
            <div className='mb-2 flex items-center'>
            <div>
                <h1 className='font-bold text-3xl flex items-center gap-2'><CiShoppingTag className='scale-x-[-1]'/> {tag.name}</h1>
            </div>
            
            
            </div>
            
            <div className='flex flex-col gap-2'>
            <Suspense fallback={<FolderListSkeleton />}>
              {
                tag.notes.map((note) => (
                <Link href={paths.showNoteTag(tag.id,note.id)} key={note.id}>
                    <div className="border p-2 flex items-center rounded-md gap-2 shadow-md">
                        <ReaderIcon />
                        <h5>{note.title}</h5>
                        
                    </div>
                </Link>
                ))
              }
            </Suspense>
              
            </div>   
        </div>
    )
}