import React from "react";
import {AppRouter} from "../Router/AppRouter";   // <-- FIXED
import{Header} from "../Components/Header/Header"
import {Footer} from "../Components/Footer/Footer"



export const MainLayout = () => {

  return (
    <>
      <Header/>
      <AppRouter />
      <Footer/>
      
    </>
  )
};