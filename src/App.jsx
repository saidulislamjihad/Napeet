import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Counter from './components/Counter'
import Services from './components/Services'
import Pricing from './components/pricing'
import Appointment from './components/Appointment'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Counter/>
      <Services/>
      <Pricing/>
      <Appointment/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
