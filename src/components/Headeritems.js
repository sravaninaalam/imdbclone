import Link from "next/link";

export default function Headeritems({title,Icon,address}) {
    return (
        <div >
          <Link href={address} >
          <Icon className='sm:hidden text-2xl'/>
                <p className="uppercase hidden sm:inline">{title}</p>
          </Link>

        </div>
    );
}