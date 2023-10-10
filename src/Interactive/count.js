import { useState } from "react";
export default function Count(){
    const[count,setcount]=useState(50);
    function increment(){
        setcount(a=>a+1);
    }
    return(
        <div>
            <h1>Count is:{count}</h1>
            <section class="count-btn">
            <button class ="btn1"onClick={()=>{increment(); increment(); increment()}}>+3</button>
            <button onClick={()=>{increment()}}>+1</button>
            </section>
            

        </div>
    )
}