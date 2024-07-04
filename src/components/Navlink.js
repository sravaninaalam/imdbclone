'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({item}) {
    const pathname=usePathname()
   
    return (
        <div>
          <Link href={item.path} className={`hover:text-amber-600 font-semibold ${pathname===item.path? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' :''}`}>{item.title}</Link>
        </div>
      )
}
