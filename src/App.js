// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Axios from 'axios';
import { useState } from 'react';


function App(){
const [joke, setJoke] = useState("")

const getJoke = ()=>{
  Axios.get("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then((response)=>{
    console.log(response.data.joke)
    setJoke(response.data.joke);
  })
  
}
return (<div>Welcome to joke app using Axios!<button onClick={getJoke}>Get Joke right Now</button><br/>
{joke}</div>)

}
export default App;