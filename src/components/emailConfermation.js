import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Logo from "../resourses/thLogo.png"
const EmailConfirmation = (props) => {
    const [Email, setEmail] = useState("")
    useEffect(() => {
       Axios.post('http://localhost:4000/verif/confirmationEmail',{email:localStorage.getItem("confirmEmail")}).then(res=>{
           if(res.data===true){
               props.history.push("/")
           }
           else{
            Axios.post("http://localhost:4000/SendConfirmationMAil",{email:localStorage.getItem("confirmEmail")})
            setEmail(localStorage.getItem("confirmEmail")) 
           }
       })
      
    }, [])
    const Resend=()=>{
        Axios.post("http://localhost:4000/SendConfirmationMAil",{email:localStorage.getItem("confirmEmail")})
    }
    return ( <div  className="menu-confirm-all">
        <div className="headerdiv">
        <div className="header">
            <img src={Logo} alt="" className="logo-small"/><p className="Tunisianhoods">Tunisian Hoods</p>
        </div>
        <div className="souHeader">
<p className="souHeader-item">Packs</p>
<p className="souHeader-item">Donation</p>
<p className="souHeader-item">Rules</p>
        </div>
        </div>
        <div className="menu-confirm">
            <p className="menu-confirm-title2"><i class="fas fa-envelope-open-text"></i> You've got mail!</p>
            <h1 className="menu-confirm-title1">Check Your Email</h1>
            <p className="menu-confirm-para font-weight-light">We just sent a confirmation link to {Email}.<br/> Verify your address and we'll get you all set up!</p>
            <button className="btn btn-danger menu-confirm-btn" onClick={Resend}>Resend Confirmation Email <i class="fas fa-arrow-right"></i>
</button>
        </div>
      <div className="footer">
<p className="footer-items">© Fonticons, Inc.</p>
<h1 className="logoLogin tunisianhoodslogo">Tunisian <span className="hoods">Hoods</span></h1>

<div class="Terms-Privacy">
   
<p className="footer-items">Terms</p>
<p className="footer-items">Privacy</p>
</div>
      </div>
    </div> );
}
 
export default withRouter(EmailConfirmation) ;