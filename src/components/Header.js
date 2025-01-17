import Link from "next/link";
import Headeritems from "./Headeritems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Darkmode from "./Darkmode";

export default function Header() {
    return (
        <>
        <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
       
           <div className="flex gap-5">
             <Headeritems title='home' Icon={AiFillHome} address='/'/>
             <Headeritems title='about' Icon={BsFillInfoCircleFill} address='/about'/>    
            </div> 
            <div className="flex">
                <Darkmode/>
             <Link href='/' className="flex"> <h1 className="font-bold bg-amber-500 p-2 rounded-md">IMDB</h1>
                <span className="p-2 hidden sm:inline">clone</span></Link>
            </div>
        </div>
        </>
    );
}