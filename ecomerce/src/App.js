import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Info from "./pages/Info";
import Search from "./pages/Search";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <h1>Eccomerce de Malandro</h1>
      <BrowserRouter>
      <NavBar></NavBar>
      <SearchForm></SearchForm>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products/:id" element={<Product/>}></Route>
          <Route path="/products/:id/info" element={<Info />}></Route>
        <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
