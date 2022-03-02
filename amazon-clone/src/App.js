import './App.css'
import Home from './Body/Home'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './Body/Cart/Cart'
import Login from './Navbar/UserAuthentication/Login'

function App() {
  return (
    <Router>
      <div>
      {/* <Navbar />       */}
        <Routes>
          <Route exact path='/login' element={<Login/>}/>        
          <Route exact path="/" element={<div><Navbar/><Home /></div>} />
          <Route exact path="/checkout" element={<div><Navbar/><Cart /></div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
