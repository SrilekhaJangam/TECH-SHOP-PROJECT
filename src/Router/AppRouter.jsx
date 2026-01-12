
import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home} from "../Pages/Home";
import {Products} from "../Pages/Products";
import {Cart} from "../Pages/Cart";
import SingleProduct from "../Components/SingleProduct/SingleProduct";




export const AppRouter=()=> {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
     
    </Routes>
  );
}