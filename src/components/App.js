import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
    
    const { id , value } = event.target;

    console.log(`Input in #${id} is ${value}`)
   // use console.log
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'}  onChange ={handleInput} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange ={handleInput} />
      <br/>
    </div>
  )
}


export default App;
