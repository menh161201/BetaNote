import FolderPage from "@/components/folder/folder-page"

interface LayoutProps {
    children: React.ReactNode,
    params: {
        folderId: string
    }
}

export default function Layout({children,params}:LayoutProps) {
    return (
      <div className="flex flex-col xl:flex-row">
        
        <div className=" xl:block">
          <FolderPage folderId={params.folderId}/>
        </div>
        
        
        <div className='flex-grow'>
            {children}
        </div>
        
      </div>
    )
  }