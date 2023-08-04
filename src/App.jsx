import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import JobSearch from './components/JobSearch'
import HappyCustomers from './components/HappyCustomers'
import Testimonials from './components/Testimonials'
import { SigningInfo } from './components/SigningInfo'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home/>
     <JobSearch/>
    <HappyCustomers/>
    <Testimonials/>
    <SigningInfo/>
    </>
  )
}

export default App
