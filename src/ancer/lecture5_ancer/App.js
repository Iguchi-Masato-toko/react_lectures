import JsonProvider from "./context/JsonProvider"
import Child from "./components/Child"
export default function App() {
  return (
    <>
      <JsonProvider>
        <Child></Child>
      </JsonProvider>
    </>
  )
}