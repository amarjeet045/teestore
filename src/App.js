import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductProvider from "./Contexts/ProductContext";
import Product from "./components/Product";

function App() {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  );
}

export default App;
