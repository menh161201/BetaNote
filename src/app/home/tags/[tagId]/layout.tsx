import TagPage from "@/components/tag/tag-page"

interface LayoutProps {
    children: React.ReactNode,
    params: {
        tagId: string
    }
}

export default function Layout({children,params}:LayoutProps) {
    return (
      <div className="flex flex-col xl:flex-row">
        
        <div className=" xl:block">
          <TagPage tagId={params.tagId}/>
        </div>
        
        
        <div className='flex-grow'>
            {children}
        </div>
        
      </div>
    )
  }