import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("HI :)");
    return () => console.log("byeeee :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible((current) => !current);
  return (
    <div>
      <button onClick={onClick}>{visible ? "Hide" : "Show"}</button>
      {visible ? <Hello /> : null}
    </div>
  );
}

export default App;
