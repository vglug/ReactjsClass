import { useState } from "react";
import "./App.css";
import Login from "./Components/UI/Form";
import CountClass from "./CountClass";

function App() {

  const [count, setCount] = useState(0)

  const clickable = () => {
    setCount(count + 1)
  }

  return (
    <div>
      {/* Inline Style */}
      {/* <div
        style={{
          textAlign: "center",
          backgroundColor: "#060042",
          color: "#fff",
          padding: "10px",
          border: "1px #000 solid",
          fontSize: "20px",
          width: "30%",
          margin: "10px auto",
        }}
      >
        Login Form
      </div> */}

      {/* Style using className */}
      {/* <div className="login">Login Form</div> */}


      {/* Login Form Component Added */}
      {/* <Login /> */}

      {/* State Example for functional Component  */}
      <div style={{ textAlign: "center" }}>Fun Count : {count}</div>
      <button onClick={() => clickable()}>Click Me !</button>

      {/* State Example for class Component  */}
      <CountClass />
    </div>
  );
}

export default App;
