import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import Banner from './Components/Carousel/banner'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProduct'


function App() {
  

  return (
    <>
      <Header/>


      <Banner/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <FeaturedProducts/>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </>
  )
}

export default App
