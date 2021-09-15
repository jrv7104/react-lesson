import { useState } from "react";
import Greeter from "./components/Hello";
import Input from "./components/Input";

function App() {
  // use State is a JS function provided by 'react"
  // It takes one argument, for our purposes
  // It returns an array with exactly 2 things in it.
  // 1. The state - it starts off with the initial value
  // 2. A function that we can call to update the state.

  const [name, setName] = useState("Mark");

  return (
    <main>
      <Greeter name={name} />
      <Input handler={setName} />
    </main>
  );
}

export default App;
