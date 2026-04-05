import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/ProductViewer'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Product />
    </main>
  )
}

export default App