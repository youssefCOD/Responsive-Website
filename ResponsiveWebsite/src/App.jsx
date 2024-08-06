import './App.css'
import { useState } from 'react'


export default function App() {
  const [count , setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Mybutton count={count} onClick={handleClick}/>
      <Mybutton count={count} onClick={handleClick}/>
    </>
  )

}

function Mybutton({count , onClick}) {
  
  return (
    <>
      <button className="Mybotton" onClick={onClick}>
        button 
      </button>
      <h1>{count}</h1>
    </>
  );
}