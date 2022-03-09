import React,{useState} from 'react'
import './Login.css'
import {SignIn,SignUp} from '../../fireBase'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [authUser,setAuthUser] = useState(true)
    
    const signin = async(e)=>{
        e.preventDefault();
        setLoading(true)
        try{
          const existing_user = await SignIn(email,password)
          console.log("Login existing",existing_user)
          setLoading(false)
        if(existing_user){
          setAuthUser(true)
          history('/admin')
        }
        }catch{
          setAuthUser(false)
          setLoading(false)          
          
        }
        
        
    }
    const register = async(e)=>{
        e.preventDefault();
        setLoading(true)
        try{
          const new_user = await SignUp(email,password)
          setLoading(false)
        if(new_user.user.email){
          console.log(new_user.user.email)
          history('/')
        }
        }
        catch{
          setLoading(false)
          alert("error");
        }
        
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
        {!authUser && <p style={{color:"red",fontSize:"15px",marginBottom:"0"}}>Please enter valid creds</p>}
        <form>
          <h5>Email</h5>
          <input type="email" onChange={e=>setEmail(e.target.value)} value={email}/>

          <h5>Password</h5>
          <input type="password" onChange={e=>setPassword(e.target.value)} value={password} />

          <button className="login__signInButton" disabled={loading} onClick={signin}>SignIn</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" disabled={loading} onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
