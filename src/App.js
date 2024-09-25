import "./App.css";
import { Button } from "react-bootstrap";
import AppNav from "./components/AppNav";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  
  return (
    <div className="App">
      <AppNav/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
