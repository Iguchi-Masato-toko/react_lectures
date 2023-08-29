import { useState } from "react";

function App() {
  const [num,setNum] = useState(0);
  return (
    <>
        <button onClick={() => setNum((prev) => prev+=1)}>ボタンをクリック</button>
        {/* <button onClick={() => setNum(num = num + 1)}>ボタンをクリック</button> */}
        <p>{num}</p>  
    </>
  );
}

export default App;
