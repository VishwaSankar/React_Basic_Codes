const Quotes=[
    "Avana nee?!",
    "Hukum! Tiger ka hukum!",
    "Kaalam pon pondrathu kavalai kan pondrathu",
    "Vaanga Uncle vilayadalam!",
   
];
export default function QuoteGenerator(){
    const num=Math.floor(Math.random()*4);
    return(
        <>
        <h1><br></br>{Quotes[num]}</h1>
        </>
    );
};