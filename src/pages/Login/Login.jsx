import React, { useState } from 'react'
import'./Login.css'
const Login = () => {
  const[state,setState]=useState('Sign Up')
  return (

      <form  onSubmit={(e)=>{e.preventDefault()}}>
            <div className='sign'>
        <div>
          <h1>{state}</h1>
        </div>
        <div className='mil'>
        <div className='infor'>
        {state.toUpperCase()=== 'Login'.toUpperCase()?'':<input type="text" placeholder='Name'required/>} 
        <input type="text" placeholder='Email'required/>
         <input type="password" placeholder='Password'required/>
     </div>
     <div className='for'>
      <p>Forgot your password?</p>
      {
        state.toUpperCase()=== 'Login'.toUpperCase()?
         <p onClick={()=>{setState('Sign Up')}}>Create Account</p>:
         <p onClick={()=>{setState('Login')}}>Login </p>
      }
     </div>
     </div>
     <button className='logBtn'>{state==='Login'?'Sign In':'Sign Up'}</button>
      </div>
      </form>
   
  )
}

export default Login