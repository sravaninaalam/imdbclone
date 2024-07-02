import Image from "next/image";
import Link from "next/link";
export default function Moviescard({movie}) {
    return (
        <>
        <div className="w-64  mx-2  my-4 rounded-md border border-black ">
        <Link href={`/movie/${movie.imdbid}`}>
            <Image src={movie.image} width={200} height={50} className="rounded-md mx-auto mt-4"/>
            <p className="truncate m-1 text-sm">{movie.description}</p>
            <h1 className="p-1 m-1 font-semibold truncate ">{movie.title}</h1>
            {/* <p className="p-1 text-lg text-slate-700">{movie.genre}</p> */} have to split by comma
         </Link>
        </div>
        </>
    );
}