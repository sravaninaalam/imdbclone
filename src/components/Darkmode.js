'use client'
import { MdDarkMode,MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
export default function Darkmode() {
   const{theme,setTheme,systemTheme}=useTheme()
    return (
        <div>
            <MdDarkMode className="text-3xl mx-3 my-1"/>
        </div>
    );
}