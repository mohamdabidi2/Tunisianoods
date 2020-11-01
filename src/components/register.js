import React, { useState } from 'react';
import Logo from "../resourses/login.jpg"
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'

const Register = (props) => {
    const [err, setErr] = useState(false)
    const [errStyle, setErrStyle] = useState('')

    const [Email, setEmail] = useState('')
    const [FullName, setFullName] = useState('')

    const [Password, setPassword] = useState('')
    const [Discord, setDiscord] = useState('')

    const [CallBackErr, setCallBackErr] = useState([])
    const VEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setCallBackErr(CallBackErr.filter(el=>el !== "invalid email address"))
            return true
        } else { 
            setCallBackErr([...CallBackErr, "invalid email address"])
            return false }
    }
    const VPassword = (password) => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)) {setCallBackErr(CallBackErr.filter(el=>el !== "Password must be at least 6 characters one digit one special character one uppercase"))
             return true }
             setCallBackErr([...CallBackErr, "Password must be at least 6 characters one digit one special character one uppercase"])
             return false
    }
    const VDiscord = (discord) => {


         if(discord.split('').includes("#")){
            setCallBackErr(CallBackErr.filter(el=>el !== "invalid Discord ID"))
return true
         }
         else{
            setCallBackErr([...CallBackErr, "invalid Discord ID"])
            return false

         }
    }
    const VFullName = (fullName) => {
       if(fullName>5){
        setCallBackErr(CallBackErr.filter(el=>el !== "FullName must be more then 5 Charecter"))
        return true
       }
       else{
        setCallBackErr([...CallBackErr, "FullName must be more then 5 Charecter"])
        return false
       }
    }
    const EmailHandler = (email) => {
        setEmail(email.target.value)
    }
    const DiscordHandler = (discord) => {
        setDiscord(discord.target.value)

    }
    const FullNameHandler = (fullname) => {
        setFullName(fullname.target.value)

    }
    const PasswordHandler = (password) => {
        setPassword(password.target.value)

    }
    // const LoginWithEmailPassword = () => {
    //   verif = VEmail(Email)
    //    VPassword(Password)
    //    VDiscord(Discord)
    //     VFullName(FullName)



    //     CallBackErr.length>=0 ? props.history.push('/Home') : setErr(true)
    //     console.log(CallBackErr)
    //     setErrStyle('animate__animated animate__shakeY')
    // }
    return (
        <div>
            <div className="loginForm">
                <div className="loginBackground">
                    <img className='loginIntroImg' src={Logo} alt="" />
                </div>
                <div className="loginFormIntro">
                    <h1 className="logoLogin">Tunisian <span className="hoods">Hoods</span></h1>
                    <h2 className='loginTitle'>Register </h2>
                    {CallBackErr.map((el,i)=>
                             <div key={i} style={err === false ? { display: 'none' } : { display: "block" }} className={`alert alert-danger ${errStyle}`} role="alert">
                       {el}
                             </div>)}
               
                    <div className='formLog'>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i class="fas fa-user-tie"></i></p>
                            <input onChange={(e) => FullNameHandler(e)} placeholder='Enter Your Full Name' className='EmailpasswordInput' type='text' />
                        </div>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i className="fas fa-at"></i></p>
                            <input onChange={(e) => EmailHandler(e)} placeholder='Enter Your Email' className='EmailpasswordInput' type='email' />
                        </div>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i class="fab fa-discord"></i></p>
                            <input onChange={(e) => DiscordHandler(e)} placeholder='Enter Your Discord ID' className='EmailpasswordInput' type='text' />
                        </div>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i className="fas fa-lock"></i></p>
                            <input onChange={(e) => PasswordHandler(e)} placeholder='Enter Your Password' className='EmailpasswordInput' type='password' />
                        </div>

                    </div>
                    <div className="agreeRegister">

                        <input className="agreeRegisterInput btn btn-black" type="checkbox" />
                        <p className="agreeRegisterText">I agree with all Terms and Conditions</p>
                    </div>
                    <button  className=' btn btn-danger loginButton'>Register</button>
                    <p className="signupFromLogin btn btn-link" onClick={() => props.history.push('/')}>Already Have an Account </p>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Register);





