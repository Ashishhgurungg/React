import React from "react";
import { useState } from "react";

const App = () => {

  const [name, setName] = useState('');

  const changeName = (e) => {
    e.preventDefault();
    console.log('form submitted by', name);
    setName('');
  }
    
  return (
    <div className="parent">
      <h1>{name}</h1>
      <form id="form" onSubmit={(e)=> {
        changeName(e);
      }}>
        <input type="text" name="" id="input" value={name} onChange={ (e) => {
            setName(e.target.value);
        }}/>
        <button onSubmit = {setName }type="submit" id="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
