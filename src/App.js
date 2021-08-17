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

  const getFirstName = (fullName) => fullName.split(" ")[0];

  //console.log(getFirstName("mybane ksks"));

  const myFun = (val) => {
    const numbers = [12, 33, 11, 10];
    return numbers.map((newVal) => newVal * val);
  };

  console.log(myFun(26));

  return <div className="App">{templateTwo}</div>;
}

export default App;
