import React from 'react'
import Home from './component/Home'
import About from './component/About'
import Header from './component/Header'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Classname from './component/Classname'
import Contect from './component/Contect'
import Login from './component/Login'


function App() {
  return (
    <>
      <Header />


      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/classname' element={<Classname />} />

        <Route path='/contect' element={<Contect />} />
        <Route path='/login' element={<Login/>} />
       

      </Routes>
      <Footer />

    </>
  )
}

export default App