import './App.css'
import Home from './Body/Home'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './Body/Cart/Cart'
import Login from './Navbar/UserAuthentication/Login'
import { useEffect } from 'react'
import { auth } from './fireBase'
import { useStateValue } from './StateProvider/StateProvider'
import { Footer } from './Footer/Footer'
import Payment from './Body/Cart/Payment/Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

import DashBoard from './AdminPortal/Dashboard/DashBoard'

const promise = loadStripe("pk_test_51KZtKwIAzdUFyghzb4CgNkXcb7bpNsCQ9oLuqTzXpnMxbkBga63jzAcUEodan9UQClaV3NKiMhoJz9BKV7SeXY5F00maoLkkjd")
  
function App() {
  const [{},dispatch] = useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  return (
    <>
    <Router>
      <div>
      {/* <Navbar />       */}
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/admin' element={<DashBoard/>}/>        
          <Route exact path="/" element={<div><Navbar/><Home /></div>} />
          <Route exact path="/checkout" element={<div><Navbar/><Cart /></div>} />
          <Route exact path="/payment" element={<div><Navbar/><Elements stripe={promise}><Payment /></Elements></div>} />
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  )
}

export default App
