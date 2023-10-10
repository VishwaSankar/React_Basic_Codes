import {useState} from 'react';
export default function Check(){
    const[click,setclick]=useState(true);
    function handleClick(e){
        setclick(e.target.checked);
    }
    return(
        <div>
            <label class="check-input" >
        <input
        
        type="checkbox"
          checked={click}
          onChange={handleClick}
        />

        <p>You {click?'Clicked me!':'Didnt clicked me'}</p>
      </label>
        </div>
    )
}