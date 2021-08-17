import "./App.css";

const appObj = {
  name: "dan",
  age: 222,
  subtite: "the juice",
  options: ["one", "two"],
};

function App() {
  const fullName = "fname lname";
  let count = 0;
  const minusOne = () => {
    count = count - 1;
    console.log(count);
  };
  const resetCount = () => {
    count = 0;
    console.log(count);
  };
  const templateTwo = (
    <div>
      <button onClick={minusOne}>minus 1</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );

  return <div className="App">{templateTwo}</div>;
}

export default App;
