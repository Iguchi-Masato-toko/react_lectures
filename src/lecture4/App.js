//setValで変更された値が表示されるとき
//ちらつきが生じないように処理を変更してください

import React from 'react'
import { useEffect,useState } from 'react';

export default function App() {
  const [val,setVal] = useState(0);

  useEffect(() => {
    setVal(100)
  },[])

  return (
    <>
      <p>表示：{val}</p>
    </>
  )
}