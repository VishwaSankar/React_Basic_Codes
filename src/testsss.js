import { useState } from "react";


export default function Api(){
    const [data,setdata]=useState([]);
    const [name,setname]=useState("");
   function aps()
    {
    let s=fetch(`http://www.omdbapi.com/?s=${name}&apikey=e990036b`);
    s.then((res)=>res.json()).then((data)=>setdata(data.Search));
    }
    return(
        <>
        <input onChange={(e)=>setname(e.target.value)}></input>
        <button onClick={()=>{aps()}}></button>
        {data.map(d=> <li>{d.Title}</li>)}
        </>
    )
}

    