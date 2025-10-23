import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LogInPopUp from './components/LogInPopUp/LogInPopUp'

export default function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin && <LogInPopUp setShowLogin={setShowLogin}/>}
      <Navbar setShowLogin={setShowLogin}/>
    <div className='app px-3 sm:px-0'>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/order' element = {<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

