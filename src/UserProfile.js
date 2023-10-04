export function UserProfile(props){
    return(
        <div>
    <p>{props.name}</p>
    <p>{props.id}<br></br>{props.city}</p>
    <ol>
        <p>{props.other.hobby}</p>
    </ol>
    
    </div>
    );
    
}