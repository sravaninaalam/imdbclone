
import MovieDetails from "@/components/MovieDetails"
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
    const result=singlemovie?.Search
    // console.log(singlemovie)
    // console.log(singlemovie)===>gives the rslt of all mves whichcontains search query
    return(
       
        <div className="flex flex-wrap max-w-6xl p-1 mx-auto">
            {result.map((movie)=><Searchresults key={movie.Title} movie={movie}/>)}
        </div>
    )
}

