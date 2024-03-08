import { Axios } from "axios"

export default function API2(){
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res=> console.log(res))
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(data=>console.log(data))    
}