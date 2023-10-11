import { useState } from "react";
const arrays=[
    {id:0, name:"James Cameron"},
    {id:1, name:"Christoper Nolan"},
    {id:2, name:"Raimi"},
    {id:3, name:"Ruso Brothers"}
]

export function DeleteList(){
   const[array,setarray]=useState(arrays); 
    return(
        <div >
            <h1>List of Hollywood Directors</h1>
            <ul class="Delete-list">
                {array.map(item=><li key={item.id}>{item.name}{' '}
                <button onClick={()=>setarray(array.filter(it=>it.id!==item.id))}>Delete</button></li>)}
            </ul>

        </div>
    )
}