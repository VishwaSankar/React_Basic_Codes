import { useState } from "react";


export default function BgColors(){
    const[backgroundColor, SetBgColor] = useState("red");
    function handleClick(e) {
        if(e.target.value=='red'){
            SetBgColor('green');
        }
        else{
            SetBgColor('red');
        }
    }
    
    return(
        <div class="Bgchange"style={{backgroundColor}}>
            <button class="cl-btn" value={backgroundColor} onClick={handleClick} onMouseEnter={handleClick} onMouseLeave={handleClick}>Click me to change colour</button>
        </div>
    );
}