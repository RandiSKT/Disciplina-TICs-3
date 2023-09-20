import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h1>Eccomerce de Malandro</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products" element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
