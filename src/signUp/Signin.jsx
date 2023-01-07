import React, { useState } from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


function Signin() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const navigator=useNavigate();
    const[signinData, setSigninData] = useState({email:"",password:""});
    const onSignin=(e)=>{
        e.preventDefault()
fetch("http://localhost:5000/api/v1/signin",{
    method:"post",
    headers:{
        "Content-Type" : "application/json",
    },
    body:JSON.stringify({
        email:signinData.email,
        password:signinData.password
    })
}).then(res=>res.json())
.then(data=>{console.log(data);
    if(data.message){
        return toast.error(data.message)
    }
   
    
    window.localStorage.setItem("id",data.user._id );      
        window.localStorage.setItem("email", data.user.email);
    toast.success(`user signin successfully`)
    navigator("/home");
})

    }

    return (
        <>
            <div className="login-main" >
                <div className="login-box">
                    <div className="login-logo">LOGO</div>
                    <div className="login-para">Enter your credentials to access your account</div>
                    <form className='login-form'>
                        <input className='login-input' type="email" placeholder="User ID" name="email" required onChange={(e)=>{setSigninData({...signinData,email:e.target.value})}}/>

                        <input className='login-input' type={passwordShown ? "text" : "password"} placeholder="Password" name="password" required onChange={(e)=>{setSigninData({...signinData,password:e.target.value})}} />
                        <i onClick={togglePasswordVisiblity} className="far fa-eye" id="togglePassword"></i>

                        <button className='login-btn' onClick={onSignin} type="submit">Sign In</button>
                    </form>
                    <div id='login-a'><a id="anchor" href="/Signup">Sign Up</a></div>
                </div>
                <div className='addition'>
                    <pre>Don't have an account?</pre>
                    <a href='/Signup'>Sign up</a>
                </div>
                <div>
  
        </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Signin