import "./App.css";
import Component01 from "./components/Component01";
import Component02 from "./components/Component02";
import Calculation from "./components/Calculation";
import ManageData from "./components/ManageData";
import ManageList from "./components/ManageList";
import ConditionalRendering from "./components/ConditionalRendering";

function App() {
  return (
    <div className="App">
      <h1>React Mano</h1>
      <Component01 />
      <Component02 />
      <Calculation></Calculation>
      <ManageData></ManageData>
      <ManageList />
      <ConditionalRendering />
    </div>
  );
}

export default App;
