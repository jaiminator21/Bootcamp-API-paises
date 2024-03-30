import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Landing from './pages/Landing'
import Countries from './pages/Countries'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router> 
      <Header/>
      <main>
        <Routes>
        <Route path="" element ={<Landing/>}/>
          <Route path="countries" element ={<Countries/>}/>
        </Routes>  
      </main>
    </Router> 
    </>
  )
}

export default App
