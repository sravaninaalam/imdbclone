export default function loading() {
 
    const arr=Array(15).fill("")
    return(
        <div className="flex flex-wrap max-w-6xl mx-auto">
            {arr.map((ar,index)=><div key={index} className="w-72 h-52 bg-gray-300 rounded-md m-4"></div>)}
        </div>

    );
}