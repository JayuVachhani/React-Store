import React,{useState} from 'react'
import './Login.css'
import {auth} from './fireBase'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const signIn = (e)=>{
        e.preventDefault();
        console.log(email,password)
    }
    const register = (e)=>{
        e.preventDefault();
        console.log(email,password)
        // auth.createUserWithEmailAndPassword(email,password).then((auth)=>console.log("auth :",auth)).catch(error=>alert(error.message))
    }
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="logo"
      />
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="email" onChange={e=>setEmail(e.target.value)} value={email}/>

          <h5>Password</h5>
          <input type="password" onChange={e=>setPassword(e.target.value)} value={password} />

          <button className="login__signInButton" onClick={signIn}>SignIn</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
