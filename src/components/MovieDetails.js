
import Image from 'next/image'

export default function MovieDetails({singlemovie}) {
    return (

    <div className="max-w-5xl  mx-auto flex my-5 p-2 gap-4">
            <div className='w-[50%] '>
                <Image src={singlemovie.Poster}  width={200} height={50} alt='movie poster' className='w-auto h-auto'/>
            </div>
            <div>
                <h1 className='p-1 m-1 text-2xl font-semibold'>{singlemovie.Title} </h1>
                
                <p className='w-2/3 p-1 m-1  '><span className='text-amber-600 font-semibold text-lg'>Overview</span><span className=' mx-2  '>{singlemovie.Plot}</span></p>
                 <p className='  p-1 m-1'><span className='text-amber-600 text-lg'>Country:</span><span className='mx-2  '>{singlemovie.Country}</span></p>
                 <p className='  p-1 m-1'><span className='text-amber-600 text-lg'>Genre:</span><span className='mx-2  '>{singlemovie.Genre}</span></p>
                <p className=' p-1 m-1'><span className='text-amber-600  text-lg'>Date Released: </span><span className='mx-2  '>{singlemovie.Released}</span></p>
                  <p className='p-1 m-1'><span className='text-amber-600  text-lg'>Rating : </span><span className='mx-2  '>{singlemovie.imdbRating}</span></p> 
            </div>
        </div>
    );
}