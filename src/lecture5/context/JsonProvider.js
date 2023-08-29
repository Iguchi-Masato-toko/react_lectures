// jsonsをChildコンポーネントに渡せるように設定する

// export const jsonContext =

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

  // return (
  //   <jsonContext>
  //     {children}
  //   </jsonContext>
  // )
}