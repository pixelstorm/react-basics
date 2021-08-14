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

  const fullName = "fname lname";
  if (fullName) {
    const firstName = fullName.split(" ")[0];
    console.log(firstName);
  }

  //outputs 'firstName' is not defined error as its called out of scope
  console.log(firstName);

  return <div className="App">{templateTwo}</div>;
}

export default App;
