import { useState } from "react"

function App() {
  let [counter,setCounter]=useState(10);
  const increase=()=>{
    setCounter(counter+1)
  }
  const decrease=()=>{
    setCounter(counter-1)
  }
  console.log(counter);
  return (
    <>
    <h1>value:{counter}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    </>
    
  )
}

export default App
