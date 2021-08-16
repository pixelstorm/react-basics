import "./App.css";

const appObj = {
  name: "dan",
  age: 222,
  subtite: "the juice",
  options: ["one", "two"],
};

function App() {
  const fullName = "fname lname";
  const templateTwo = (
    <div>
      <h1>thios is bla {appObj.name}</h1>
      {appObj.subtite && <h2>{appObj.subtite}</h2>}
      {appObj.options.length > 0 ? "we have options" : "there are no options"}
    </div>
  );

  const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
  };

  console.log(getFirstName("mybane ksks"));

  //const getFirstNameExp = () => console.log(firstName);

  //getFirstNameExp();

  //outputs 'firstName' is not defined error as its called out of scope
  //console.log(firstName);

  return <div className="App">{templateTwo}</div>;
}

export default App;
