import './App.css'
import Home from './Body/Home'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './Body/Cart/Cart'

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
