import {useState} from 'react';
import { sculptureList } from './data';
 export default function Gallery(){
        const[index,setIndex]=useState(0);
        let hasprev=index>0;
        let hasnextijjjj=index<sculptureList.length-1;
 function handlenextClick(){
    if(hasnext)
    setIndex(index+1);
 }
 function handleprevClick(){
    if(hasprev)
    setIndex(index-1);
 }

 let sculpture=sculptureList[index];
 return(
    <div>
        <button onClick={handlenextClick} disabled={!hasnext}>Go Next</button>
        <button onClick={handleprevClick} disabled={!hasprev}>GO Back</button>
        <h1><i>{sculpture?.name}</i> by {sculpture.artist}</h1>
        <h3>({index+1} of {sculptureList.length})</h3>
        <img
            src={sculpture.url}
        />
        <p>
            {sculpture.description}
        </p>
    </div>
 )
 
    }