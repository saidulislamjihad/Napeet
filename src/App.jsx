import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Counter from './components/Counter'
import Services from './components/Services'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Counter/>
      <Services/>
    </>
  )
}

export default App
