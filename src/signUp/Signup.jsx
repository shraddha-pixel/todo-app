import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
import { ToastContainer, toast } from 'react-toastify';



function Signup() {
   const [data,setData] = useState({email :"",password:"",cpassword:""})
   const navigator=useNavigate();
   const onSubmit=(e)=>{
    e.preventDefault()
    if(data.password !==data.cpassword){
        return toast.error(`password doesn't match`)
    }
fetch("http://localhost:5000/api/v1/signup",{
    method:"post",
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({
        email:data.email,
        password:data.password,
        confirmpassword:data.cpassword
    })
}).then(res=>res.json())
.then(data=>{
    if(data.message === "user already exist"){
        return toast.error("user already exist")
    }
    toast.success(`user signup successfully`)
    navigator("/");
})

    
}

    return (

        <>
        <div className="login-main" >
            <div className="login-box">
                <div className="login-logo">LOGO</div>
                <div className="login-para">Create New Account</div>
                <form className='login-form'>
                    <input className='login-input'  type="email" placeholder="Mail ID" name="email"  required  onChange={(e)=>{setData({...data,email:e.target.value})}} />
                    <input className='login-input'  type="password" placeholder="Password" name="password"  required onChange={(e)=>{setData({...data,password:e.target.value})}} />
                    <input className='login-input'  type="password" placeholder="Confirm Password" name="cpassword"  required onChange={(e)=>{setData({...data,cpassword:e.target.value})}} />
                    <button className='login-btn' type="submit" onClick={onSubmit} >Sign up</button>
                </form>
            </div>
            <div className='addition'>
            <a href='/'>Sign in</a>
            </div>
        </div>

        <ToastContainer/>
        </>

    )
}








export default Signup