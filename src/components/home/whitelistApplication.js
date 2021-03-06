import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import logo from "../../resourses/thLogo.png"
import Form from './multiForm';


const WhitelistApplication = (props) => {
    useEffect(() => {
        localStorage.getItem('user')==""?props.history.push('/log'):console.log("")
        
    }, [])
    return (<div>
          <div className="header-d">
            <header className="header-a ">
                <div className="headerParts">

                    <ul className="menuHeader">
                        <li className="menuheader-item" onClick={()=>props.history.push('/')}>Home</li>
                        <li className="menuheader-item menuheader-item-drop">Application 
                        <ul className="menuheader-item-menu">
                            <li className="menuheader-item-item fdg"  onClick={()=>props.history.push('/home/staff')}>Staff</li>
                            <li className="menuheader-item-item fdg" onClick={()=>props.history.push('/fivem/admins/rules/all')}>Rules</li>
                            <li className="menuheader-item-item" onClick={()=>props.history.push('/home/whitelistApp')}>Whitelist Application</li>
                            <li className="menuheader-item-item">Staff Application</li>
                            <li className="menuheader-item-item">Bug Report</li>
                            <li className="menuheader-item-item">Open Ticket</li>

                        </ul>
                        
                        </li>
                        <li className="menuheader-item  menuheader-item-drop"><span className="donate" onClick={()=>props.history.push('/home/donation')}>Donation</span>

                        <ul className="menuheader-item-menu menuheader-item-menu2">
                            <li className="menuheader-item-item fdg">Priority Queue</li>
                            <li className="menuheader-item-item">Character Name Change</li>
                            <li className="menuheader-item-item">Custom Vehicle (upgraded)</li>
                            <li className="menuheader-item-item">Super Custom Vehicle (upgraded)</li>
                            <li className="menuheader-item-item">Any Custom Vehicule</li>
                            <li className="menuheader-item-item">Custom Phone number</li>
                            <li className="menuheader-item-item">Custom Vehicle Plat</li>
                            <li className="menuheader-item-item">Housing</li>

                        </ul>
                        </li>
                        <li className="menuheader-item">Support</li>
                    </ul>
                </div>

                <div className="headerParts headerParts2">
                    <img src={logo} className="header-logo" alt="" />

                </div>
                {localStorage.getItem('user')==""?  <div className="headerParts headerParts3">
                    <p className="exuser">
                        Existing user? <span className="signinbn" onClick={()=>props.history.push('/log')}>Sign In</span>  </p>
                    <button className="btnlogin" onClick={()=>props.history.push('/Register')}>Sign Up</button>
                </div>:<p className="btnlogin" onClick={()=>props.history.push('/log')}> <i class="fas fa-user"></i> My Account</p>}
              
            </header>
        </div>

<main className="main-whitlist">

<div className="container">
  
<Form/>
      </div>


</main>



        <footer className="footer-a">
            <p className="copyright rp">Copyright © 2020 Tunisian Hoods, LLC.<br/> All Rights Reserved.
Powered by our Developers</p>
            <div className="socialmedia">
            <a href="" className="dddzall">   <i class="fab fa-discord dddz"></i></a>
            <a href="" className="dddzall"><i class="fab fa-instagram-square dddz"></i></a>
            </div>
            <p className="rp">rp.tunisianhoods.com</p>
        </footer>
    </div>  );
}
 
export default withRouter(WhitelistApplication);