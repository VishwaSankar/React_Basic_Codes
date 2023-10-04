import logo from './logo.svg';
import './App.css';
import { Test } from './UserComp';
import Fruits, { Fruitlist } from './Fruit';
import Link from './Websitelink';
import { Blog } from './blogspot';
import QuoteGenerator from './Quote';
import { MathResult } from './MathRes';
import { Movie } from './prop';
import Button from './button';
import { UserProfile } from './UserProfile';
import CondRender from './UserStatus';
//week4 task1
const use={
  name: 'John', 
  id: 420,
  city: 'San Francisco'
}
function App(){
  return (
    <div>
    <Movie title="Mission Impossible" year="2015" />
    <Button label="Click"/>
    <Button label="Submit"/>
    <UserProfile 
   {...use}
    other={{hobby:"gaming", favourite:"Red Dead Redemption 2"}}/>
    <CondRender/>
    </div>
    
  );
 
}





function Greeting() {
  return (
    <h1> Hello, React! </h1>
  );
}
const user = 
{
  name : "I'm your friendky neighborhood Spider-man!",
  age : "I'm 26 years old",
  Quotes: "Great Power Gives Great Responsibility"
}
function Profile()
{
  return(
    <>
     <img class='avatar' src="https://w7.pngwing.com/pngs/14/1007/png-transparent-red-and-blue-spider-man-caricature-illustration-spider-man-in-television-cartoon-drawing-spider-television-comics-child-thumbnail.png" />
    <h1>{user.name}</h1>
    <h2>{user.age}</h2>
    <i><span>Uncle Ben used to say</span> {user.Quotes}</i>
    </>
  );
}


export default App;

