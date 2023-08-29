import Child from "./components/Child";
function App() {
  return (
    <>
      <div className="parentsContents ">
        親コンポーネント
        <Child data="Hello World"></Child>
      </div>
    </>
  );
}

export default App;
