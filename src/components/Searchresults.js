
import Image from 'next/image'
import Link from 'next/link'

export default function Searchresults({movie}) {
    return (

    <div className="w-64  mx-2  my-4 rounded-md border border-black ">
        <Link href={`/movie/${movie.imdbID}`}>
            <Image src={movie.Poster} width={200} height={75} alt='movie poster' className="rounded-md mx-auto mt-4"/>
            <h1 className='p-1 m-1 text-2xl font-semibold'>{movie.Title} </h1>
            <h1 className="p-1 m-1 font-semibold truncate ">{movie.Year}</h1>
        </Link>
    </div>
    )
}