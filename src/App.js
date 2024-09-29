import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import Axios from "axios"

import cat from './cat.gif'
// want to fetch data with api ! 

// function used to fetch something from api


function App() {

  const [text, setText] = useState("")
  // const [isButtonClicked, setIsButonClicked] = useState(false)
  console.log(text)

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setText(res.data.fact)
    })

  }

  return (
    <div className="App">

      <h1 id="title">Cool Cat Facts </h1>
      
      <div id="button">

      <button onClick={fetchCatFact} >Generate Cat Facts</button>
      </div>
      
      <div id="container">
      <div id="text"> <p>{text}</p> </div>
      </div>

      <img src={cat} alt="Cat Image" className="cat-image"/>

    </div>
  );
}

export default App;
