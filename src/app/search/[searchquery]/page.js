
import Searchresults from "@/components/Searchresults"


const API_KEY=process.env.API_KEY
const getData=async(searchquery)=>{
    // const data=await fetch(`https://www.omdbapi.com/?t=${searchquery}&apikey=${API_KEY}`)
    const data=await fetch(`https://www.omdbapi.com/?s=${searchquery}&apikey=${API_KEY}`)
    const res=await data.json()
    return res
}
export default async function Searchpage({params}) {
    const{searchquery}=params
    const singlemovie=await getData(searchquery)
    //multiple search results 
    const result=singlemovie?.Search  

    return(
       <>
       {result ?
       <div>
         <h1 className='mx-20 p-2 font-serif text-2xl text-amber-600'>Search results for &ldquo;{searchquery}&ldquo;</h1>
         <div className="flex flex-wrap max-w-6xl p-1 mx-auto">
            {result.map((movie)=><Searchresults key={movie.Title} movie={movie} />)}
        </div>
        </div>
        : <div>
             <h1 className='mx-20 p-2 font-serif text-2xl text-amber-600'>No results for &ldquo;{searchquery}&ldquo;</h1>
        </div> }
     </>
    )
}

