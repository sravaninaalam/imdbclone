import MovieDetails from "@/components/MovieDetails"

const API_KEY=process.env.API_KEY
const getData=async(searchquery)=>{
    const data=await fetch(`https://www.omdbapi.com/?t=${searchquery}&apikey=${API_KEY}`)
    // const data=await fetch(`https://www.omdbapi.com/?s=${searchquery}&apikey=${API_KEY}`)
    const res=await data.json()
    return res
}
export default async function Searchpage({params}) {
    const{searchquery}=params
    const singlemovie=await getData(searchquery)
    // console.log(singlemovie)===>gives the rslt of all mves whichcontains search query
    return (
        <div>
           <MovieDetails singlemovie={singlemovie}/>
        </div>
    );
}