import "./App.css";
import Component01 from "./components/Component01";
import Component02 from "./components/Component02";
import Calculation from "./components/Calculation";

function App() {
  return (
    <div className="App">
      <h1>React Mano</h1>
      <Component01 />
      <Component02 />
      <Calculation></Calculation>
    </div>
  );
}

export default App;
