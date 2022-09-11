import "./App.css";
import Login from "./Components/UI/Form";
function App() {
  return (
    <div>
      {/* Inline Style */}
      <div
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
      </div>

      {/* Style using className */}
      <div className="login">Login Form</div>

      {/* Login Form Component Added */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
