import { useState } from "react";
export default function Counter(){
    const[count, setcount]=useState(0);
    return (
        <div>
            <p class="count-container">{count}</p>
            <button id="count" onClick={()=>setcount(count+1)}>Click me to increase count!</button>
            <button id="reset" onClick={()=>setcount(0)}>Reset</button>
        </div>
    )
}