
import Navlink from "./Navlink"



const Link_Paths=[
  {
      title:'Recommended',
      path:'/recommended'
  },{
       title:'Popular',
      path:'/popular'
  },{
       title:'Top Series',
      path:'/series'
  }
]


export default function Navbar() {
  return (
    <div className="bg-lime-200 flex p-2 justify-center gap-7">
      
        {Link_Paths.map(link=><Navlink key={link.title} item={link}/>)}
    </div>
  )
}

