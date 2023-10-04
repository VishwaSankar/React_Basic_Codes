export default function CondRender()
{
return(
    <div>
        <User
        isOnline={true}
        age="17"/>
        <User 
        isOnline={false}
        age="32"
        />
        {/* <h1>Conditional Rendering Programs</h1>
        <Item
        isPacked={true}
        name="Playstation 5"
        />
        <Item
        isPacked={false}
        name="XBOX"
        />
        <Item
        isPacked={true}
        name="Gaming PC"
        />
        <Item
        isPacked={false}
        name="Nitendo Switch"
        />
        <Item
        isPacked={true}
        name='RTX 4090'/> */}

    </div>
)
}
// function Item({isPacked, name}){
//     if(isPacked){
//         return(<li>{name} is available</li>)
//     }
//     else{
//         return(<li>{name} is not available</li>)
//     }
// }
function User(props){
    // if(props.isOnline){
    //     return(<h1>Person is online </h1>)
    // }
    // else{
    //     return(<h1>Person is offline</h1>)
    // }
    if(props.age>=18){
        return(<h2>His age is {props.age}, So He is Adult</h2>)
    }
    else{
        return(<h2>His age is {props.age}, So He is minor</h2>)
    }
}
