import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/Signin'
import SignOut from './pages/SignOut'
import Header from './components/Header'
import Projects from './pages/Projects'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-out' element={<SignOut/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
