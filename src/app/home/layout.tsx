import NavBar from "@/components/navigation/nav-bar"

export default function Layout(props: {
    children: React.ReactNode
    list: React.ReactNode
    note: React.ReactNode
  }) {
    return (
      <div className="flex xl:flex-row flex-col relative">
        <NavBar />
        <div className="flex-grow">{props.children}</div>
      </div>
    )
  }