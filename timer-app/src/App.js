import { useState } from "react";
import "./App.css";
import Timer from "./timer";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <Timer /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

export default App;
