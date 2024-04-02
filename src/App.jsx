import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Landing from './pages/Landing'
import Countries from './pages/Countries'
import Form from './pages/Form'
import User from './pages/User'


function App() {
  return (
    <>
    <Router> 
      <Header/>
      <main>
        <Routes>
          <Route path="" element ={<Landing/>}/>
          <Route path="countries" element ={<Countries/>}/>
          <Route path="form" element ={<Form/>}/>
          <Route path="user" element ={<User/>}/>
        </Routes>  
      </main>
    </Router> 
    </>
  )
}

export default App
