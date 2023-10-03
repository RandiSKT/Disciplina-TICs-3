import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Info from "./pages/Info";
import Search from "./pages/Search";
import { SearchForm } from "./components/SearchForm";
import NotFound from "./pages/NotFound";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div className="App">
      <h1>Eccomerce de Malandro</h1>
      <BrowserRouter>
        <NavBar></NavBar>
        <SearchForm></SearchForm>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="/products/:id/info" element={<Info />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/company" element={<Navigate to="/About" />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
