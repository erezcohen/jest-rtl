import logo from "./logo.svg";
import "./App.css";
import Basic from "./Components/Basic";
import UserAction from "./Components/UserAction";
import UserActionDelayed from "./Components/UserActionDelayed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <Basic />
        <p></p>
        <UserAction />
        <p></p>
        <UserActionDelayed />
      </header>
    </div>
  );
}

export default App;
