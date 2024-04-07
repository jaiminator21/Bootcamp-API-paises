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
import CountryDetail from './layout/CountryDetail'
import Protected from './component/Protected'


function App() {

  const [login, setLogin] = useState({
    email: "",
    token: ""
  })
  console.log("App.jsx",login);

  return (
    <>
    <Router> 
      <Header/>
      <main>
        <Routes>
          <Route path="" element ={<Landing/>}/>
          <Route path="countries"  element ={<Countries />}/>
          <Route element={<Protected isAllowed={!!login.token}/>}>
            <Route path="form" element ={<Form/>}/>
          </Route>   
          <Route path="user" element ={<User setLogin={setLogin}/>}/>
          <Route path ="/:name" element = {<CountryDetail />}/>
   
        </Routes>  
      </main>
    </Router> 
    </>
  )
}

export default App
