import "./App.css";
import Counter from "./Counter"; // Import a component from another file

function App() {
  const fullName = "fname lname";

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
