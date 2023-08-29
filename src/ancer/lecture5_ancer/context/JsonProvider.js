import React, { createContext } from 'react'

export const jsonContext = createContext();

const jsons = [
  {
    id: 1,
    name:"Taro",
  },
  {
    id: 2,
    name:"Jiro",
  },
  {
    id: 3,
    name:"Takeshi",
  },
]

export default function JsonProvider({children}) {

  return (
    <jsonContext.Provider value={jsons}>
      {children}
    </jsonContext.Provider>
  )
}