import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./components/pages/Customers";
import Customer from "./components/pages/Customer";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import AddProducts from "./components/AddProducts"
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/products" element={<Product />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<Customer />} />
            <Route path="/add-products" element={<AddProducts />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/:id/update" element={<UpdateProduct />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavBar>
      </BrowserRouter>
    </>
  );
}

export default App;
