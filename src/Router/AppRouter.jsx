
import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home} from "../Pages/Home";
import {Products} from "../Pages/Products";
import {Cart} from "../Pages/Cart";




export const AppRouter=()=> {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
     
    </Routes>
  );
}