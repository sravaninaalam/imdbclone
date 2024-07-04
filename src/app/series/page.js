import Moviescard from "@/components/Moviescard";

const { Series_Url, options } = require("@/utils/helper")

const getData=async()=>{

   const data=await fetch(Series_Url,options)
   const result = await data.json();
   return result
}

export default async function page() {
    const datamovies=await getData()
  const movies=datamovies.slice(0,21)
  return(
        <div className="flex flex-wrap max-w-6xl p-1 mx-auto">
        {movies.map((movie)=><Moviescard movie={movie} key={movie.imdbid}/>)}
        </div>
)
}