'use client'

import { useState } from "react";

export default function Serachbar() {
  const[search,setSearch]=useState('')
  function handleSubmit(e){
      e.preventDefault()

  }
    return (
        <div>
          <form className="max-w-5xl mx-auto my-4  p-1 bg-slate-600" onSubmit={handleSubmit}>
               <input type="text" placeholder="search movies ..." className="md:w-[80%]  border border-black p-2"
               value={search} onChange={(e)=>setSearch(e.target.value)}/>
               <button className="p-2 mx-5 font-semibold text-white" type="submit">Search</button>
          </form>
        </div>
    );
}