let a=60;
let b=9;
const add=a+b;
const prod=a*b;
const paragraph="The PlayStation was released in Japan in December 1994, and it made its American debut in September 1995; both releases elicited critical acclaim and impressive sales. Titles such as Twisted Metal and Ridge Racer were very popular. By 2005 the PlayStation had become the first console ever to ship 100 million units."
const WordCount=()=>{
    const words=paragraph.split(/\s+/);
    return words.length;
}
const Count=WordCount();
export function MathResult()
{
    return(
        <div>
            <p>Addition of a and b is = {add}</p>
            <p>Product of a and b is = {prod}</p>
            <h2>{paragraph}</h2>
            <p>Length of the paragraph is {Count}</p>



        </div>
    )
}