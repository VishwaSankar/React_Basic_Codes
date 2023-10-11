
export default function Button(){
    function handleClick()
    {
        alert("You clicked me da mame!");
    }
    return(
        <div>
            <button class="btn" onClick={handleClick}>Click me if you are dare!</button>
        </div>
    )
}