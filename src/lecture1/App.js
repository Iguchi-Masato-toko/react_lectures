//「Child」という名前でコンポーネントを作成し、
//AppコンポーネントからHello Worldという値を受け取り表示させるように組んでください

function App() {
  return (
    <>
        <div className="parentsContents ">
        親コンポーネント
        {/* 以下をコピーしChildコンポーネントに記述してください */}
        {/* <div className='childContents'>
            Childコンポーネントです
            <p></p>
        </div> */}
        {/* <Child /> */}
      </div>
    </>
  );
}

export default App;
