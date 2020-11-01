import React, { useState } from 'react';
import Logo from "../resourses/login.jpg"
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'

const Login = (props) => {
    const [err, setErr] = useState(false)
    const [errStyle, setErrStyle] = useState('')

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [CallBackErr, setCallBackErr] = useState("")
    const VEmail = (email) => { if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { return true } return false }
    const EmailHandler = (email) => {
        setEmail(email.target.value)
    }


    const PasswordHandler = (password) => {
        setPassword(password.target.value)

    }
    const LoginWithEmailPassword = () => {
        let verif = VEmail(Email)
        verif === true ? props.history.push('/Home') : setErr(true)
        setCallBackErr("The Email Address or Password That You've Entered Doesn't Match Any Account . ")
        setErrStyle('animate__animated animate__shakeY')
    }
    return (
        <div>
            <div className="loginForm">
                <div className="loginBackground">
                    <img className='loginIntroImg' src={Logo} alt="" />
                </div>
                <div className="loginFormIntro">
                    <h1 className="logoLogin">Tunisian <span className="hoods">Hoods</span></h1>
                    <h2 className='loginTitle'>Login</h2>
                    <div style={err === false ? { display: 'none' } : { display: "block" }} className= {`alert alert-danger ${errStyle}`} role="alert">
                        {CallBackErr}
                    </div>
                    <div className='formLog'>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i className="fas fa-at"></i></p>
                            <input onChange={(e) => EmailHandler(e)} placeholder='Enter Your Email' className='EmailpasswordInput' type='email' />
                        </div>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i className="fas fa-lock"></i></p>
                            <input onChange={(e) => PasswordHandler(e)} placeholder='Enter Your Password' className='EmailpasswordInput' type='password' />
                        </div>

                    </div>
                    <p className='forgetPassword' onClick={()=>props.history.push('/forgetpassword')}>forget password ?</p>
                    <button onClick={LoginWithEmailPassword} className=' btn btn-danger loginButton'>Login</button>
                    <p className="signupFromLogin btn btn-link" onClick={()=>props.history.push('/Register')}>Create Account</p>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);





