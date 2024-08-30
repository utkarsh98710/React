import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Use of hooks.
// babble (_jsx) under the hood jake sari cheej inject kar deta he 
function App() {

  // use Hooks to avoid multiple variable calling at the same time 
  // useState function give us 2 value , first one is value or and other is function we called set counter kuch bhi bol skate he ham 
  // let counter=5;
  

  //Hooks
 let[counter,setCounter] =useState(10)

  const addValue = ()=>{
    // console.log("Value clicked",counter);
    // counter=counter+1;
   setCounter(counter+1);
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Hello React</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
    on
    onClick={removeValue}
    >remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
