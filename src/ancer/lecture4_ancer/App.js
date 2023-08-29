import React, { useEffect } from 'react'
import { useLayoutEffect,useState } from 'react';

export default function App() {
  const [val,setVal] = useState(0);

  // useEffect(() => {
  //   setVal(100)
  // },[])

  useLayoutEffect(() => {
    setVal(100)
  },[])

  return (
    <>
      <p>表示：{val}</p>
    </>
  )
}