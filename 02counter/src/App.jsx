import { useState } from 'react' //hook kke liye use hota h
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [ct, setcounter]= useState(5)
 // let ct=15;
  const addValue=()=>{
    console.log("clicked", ct); 
    //ct++;
    setcounter(ct+1)

  }
  const rValue=()=>{
   // console.log("value added", Math.random()*-1);
   if(ct>=1)
   setcounter(ct-1) 
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {ct}</h2>

    <button onClick={addValue}>Add value {ct}</button>
    <br />
     <button onClick={rValue}>Remove value{ct}</button>
     <p>footer: {ct}</p>
    </>
  )
}

export default App
