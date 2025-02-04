import React from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div>
      <h1>React Fiber & Testing Demo</h1>
      <Counter />
      <Loader />
      <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
    </div>
  );
};

export default App;
