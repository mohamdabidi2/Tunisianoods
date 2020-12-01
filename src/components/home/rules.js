import React, { useEffect, useState } from 'react'
import logo from "../../resourses/thLogo.png"

import { withRouter } from 'react-router-dom';
import Axios from 'axios';
const Rules = (props) => {
    const [Rules, setRules] = useState([])
    useEffect(() => {
    
  Axios.get("http://localhost:4000/rules/all").then(res=>setRules(res.data))
        
    }, [])
    return ( <div className="rulesaal">
        <div className="header-d">
            <header className="header-a  header-rules">
                <div className="headerParts">

                    <ul className="menuHeader">
                        <li className="menuheader-item" onClick={()=>props.history.push('/')}>Home</li>
                        <li className="menuheader-item menuheader-item-drop">Application 
                        <ul className="menuheader-item-menu">
                            <li className="menuheader-item-item fdg"   onClick={()=>props.history.push('/home/staff')}>Staff</li>
                            <li className="menuheader-item-item fdg" onClick={()=>props.history.push('/fivem/admins/rules/all')}>Rules</li>
                            <li className="menuheader-item-item">Whitelist Application</li>
                            <li className="menuheader-item-item">Staff Application</li>
                            <li className="menuheader-item-item">Bug Report</li>
                            <li className="menuheader-item-item">Open Ticket</li>

                        </ul>
                        
                        </li>
                        <li className="menuheader-item  menuheader-item-drop">Donation
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
        <main className="menu-meni">
            <div className="rules-category">
                <p className="category-aa">General Rules</p>
                <p className="category-aa">Police Rules</p>
                <p className="category-aa">Ems Rules</p>
                <p className="category-aa">Mort Rp Rules</p>
                <p className="category-aa">Gang Rules</p>
                <p className="category-aa">Buissness Rules</p>
                <p className="category-aa">Streamer Rules</p>
                <p className="category-aa">Discrod Rules</p>
            </div>
{Rules.map(rule=>
    <div className="rulestempleparts" key={rule._id}>
    <div className="partie1-temple">
<h1 className="admin-name">{rule.UserName}</h1>
<p className="adminrank">{rule.UseRole}</p>
<img src={rule.userPhoto}alt="" className="adminphoto"/>
<p className="admin-ranka">{rule.UseRole}</p>
<p className="postedat">Posted {rule.DateCreation}</p>
    </div>
    <div className="partie2-temple">
<h1 className="rule-title">{rule.RuleTitle}</h1>
      <ul className="ruleslist">
{rule.Rules.map(el=> <li className="rules-onebyone">{el}</li>)}

      </ul>
        </div>
</div>)}


<div className="pagesall">
<div className="pages">
    <p className="page"><i class="fas fa-chevron-left"></i></p>
    <p className="page">1</p>
    <p className="page">.</p>
    <p className="page">.</p>
    <p className="page">10</p>
    <p className="page"><i class="fas fa-chevron-right"></i></p>

</div>
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
    </div> );
}
 
export default withRouter(Rules) ;