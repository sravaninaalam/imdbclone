'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  return (
    <>
        <div className="bg-lime-200 flex p-2 justify-center gap-7">
          <NavbarItems title='Trending' param='trending'/>
          <NavbarItems title='TopRated' param='toprated'/>
        
        </div>
    </>
  )
}
export  function NavbarItems({title,param}) {
  const searchparams=useSearchParams()
  const genre = searchparams.get('genre');
  return (
    <div>
       <Link href={`/?genre=${param}`} className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }`}>
        <p>{title}</p>
       </Link>
    </div>
  );
}
