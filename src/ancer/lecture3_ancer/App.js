import React from 'react'
import { useEffect,useState } from 'react';

function Timer() {
  const [val,setVal] = useState(0);
  useEffect(() => {
    let timer = null
      timer = setInterval(() =>{
      console.log("called")
        setVal((prev) => prev + 1);
     },1000);
     return () => {
      window.clearInterval(timer);
      console.log("end")
     }
    }, []);
    return (
      <div>{val}秒経過</div>
    )
}

export default function App() {
  const [flag,setFlag] = useState(true);

  return (
    <>
      <button onClick={() => setFlag(prev => !prev)}>トグルボタン</button>
      {flag && <Timer/>}
    </>
  )
}