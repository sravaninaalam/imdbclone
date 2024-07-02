import MovieDetails from '@/components/MovieDetails'

const API_KEY=process.env.API_KEY
const getData=async(id)=>{

    const data=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
    const res=await data.json()
    return res
}
export default async function SingleMoviePage({params}) {

    const{id}=params
    const singlemovie=await getData(id)
    
    return (
        <MovieDetails  singlemovie={singlemovie}/>
    );
}