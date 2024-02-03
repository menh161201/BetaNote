import FolderPage from "@/components/folder/folder-page"

interface LayoutProps {
    children: React.ReactNode,
    params: {
        folderId: string
    }
}

export default function Layout({children,params}:LayoutProps) {
    return (
      <div className="flex">
        
        <FolderPage params={params}/>
        
        <div className='flex-grow'>
            {children}
        </div>
        
      </div>
    )
  }