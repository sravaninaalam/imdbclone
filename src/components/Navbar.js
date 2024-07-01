import Link from "next/link";

export default function Navbar() {
  return (
    <>
        <ul className="bg-lime-200 flex p-2 justify-center gap-7">
          <Link href='/trending'><li>Trending</li></Link>
          <Link href='/toprated'><li>TopRated</li></Link>
        </ul>
    </>
  )
}
