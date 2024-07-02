
import Moviescard from "@/components/Moviescard";
import { options, url } from "@/utils/helper";



const getData=async()=>{
  const response = await fetch(url,options);
	const result = await response.json();
  return result
 }
export default async function Home() {
  const datamovies=await getData()
  // console.log(datamovies)
  const movies=datamovies.slice(0,21)
  return (
     <div className="flex flex-wrap max-w-6xl p-1 mx-auto">
       {movies.map((movie)=><Moviescard movie={movie}/>)}
     </div>
  );
}
