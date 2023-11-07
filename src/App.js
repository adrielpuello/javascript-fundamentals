import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Operators from "./components/Operators";
import Questions from "./components/Questions";
import "./App.css";


const App = () => {

  const [ page, setPage ] = useState('home')

  return (
    <div className="App">
      <NavBar setPage={setPage}/>
      {page==='home' ? <Home/> : <></>}
      {page==='operators' ? <Operators/> : <></>}
      {page==='questions' ? <Questions/> : <></>}
    </div>
  );
}

export default App;
