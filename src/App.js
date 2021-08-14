import "./App.css";

const appObj = {
  name: "dan",
  age: 222,
  subtite: "the juice",
  options: ["one", "two"],
};

function App() {
  const templateTwo = (
    <div>
      <h1>thios is bla {appObj.name}</h1>
      {appObj.subtite && <h2>{appObj.subtite}</h2>}
      {appObj.options.length > 0 ? "we have options" : "there are no options"}
    </div>
  );
  return <div className="App">{templateTwo}</div>;
}

export default App;
