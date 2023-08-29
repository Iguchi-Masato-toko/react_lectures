import React from 'react'
import { jsonContext } from '../context/JsonProvider';
function Child() {
    // const data = 
    console.log(data);
  return (
    <>
        {data.map(el => (
            <p key={el.id}>{el.name}</p>
        ))}
    </>
  )
}

export default Child