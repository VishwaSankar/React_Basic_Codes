const title="Rich Dad Poor Dad";
const desc="Rich Dad Poor Dad is about Robert Kiyosaki (author) and his two dads—his real father (poor dad) and the father of his best friend (rich dad)—and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you do not need to earn a high income to become rich";
const author="Robert Kiyosaki";
const footer="Copyrights for this site reserved by Vishwa Sankar";
const currdate=new Date();
const formattedDate=currdate.toDateString();
export function Blog(){
    return(
    <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <h2>Author:{author}</h2>
        <footer>{footer}</footer>
        <p>{formattedDate}</p>
    </div>
    );
}