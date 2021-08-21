import React from "react";
import { useState } from "react";

export const Form = () => {
  const [app, setApp] = useState({
    title: "Indecision App",
    subtitle: "Put your life in the hands",
    options: [],
  });

  //const [arrayCount, setarrayCount] = useState(app.options.length);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
      setApp((state) => ({ ...state, options: [...state.options, option] }));
      console.log("onsubmit");
    }
  };

  const clear = () => {
    setApp((app.options.length = 0));
    //console.log(app.options);
  };

  //const outputOptions = app.options.map((option) => option);

  const getCount = () => {
    if (app.options.length > 0) {
      setApp(app.options);
    }
  };

  return (
    <div>
      <p>{getCount}</p>
      {app.options.map((option) => (
        <p key={option}> Option: {option}</p>
      ))}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button onClick={clear}>clear</button>
    </div>
  );
};
export default Form;
