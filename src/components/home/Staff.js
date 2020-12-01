import React from 'react'
import logo from "../../resourses/thLogo.png"

import { withRouter } from 'react-router-dom';

const Staff = (props) => {
    return ( <div className="">
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
        <main className="main-staff">
<h1 className="title-staff">Staff Directory</h1>
<div className="owners">
    <div className="owner">
        <h1 className="ownerrr1">OWNERS</h1>
      <div className="ownerlist">
      <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">3uday</p>
        <p className="adminrank eranl">Founder</p></div>
      </div>
    
   

    </div>
</div>

<div className="owners">
    <div className="owner">
        <h1 className="ownerrr1">SUPERVISORS</h1>
      <div className="ownerlist">
      <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">Youssef</p>
        <p className="adminrank eranl">supervisor</p>
        
        </div>
          <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">Speedy</p>
        <p className="adminrank eranl">supervisor</p>
        
        </div>
      </div>
    
   

    </div>
</div>
<div className="owners">
    <div className="owner">
        <h1 className="ownerrr1">DEVELOPERS</h1>
      <div className="ownerlist">
      <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">Zom</p>
        <p className="adminrank eranl">LUA Developer</p></div>
        <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">Hexor</p>
        <p className="adminrank eranl">JS Developer</p></div>
      </div>
    
   

    </div>
</div>
<div className="owners">
    <div className="owner">
        <h1 className="ownerrr1">MANAGEMENT TEAM</h1>
        <div className="ownerlist">
      <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">3uday</p>
        <p className="adminrank eranl">Founder</p></div>
      </div>  
          <div className="ownerlist">
      <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">Achraf Tmar</p>
        <p className="adminrank eranl">Diwana</p></div>
      </div>
    
   

    </div>
</div>
<div className="owners">
    <div className="owner">
        <h1 className="ownerrr1">WHITELISTERS</h1>
      <div className="ownerlist">
      <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">3uday</p>
        <p className="adminrank eranl">Founder</p></div>
      </div>
    
   

    </div>
</div>
<div className="owners">
    <div className="owner">
        <h1 className="ownerrr1">MODERATION TEAM</h1>
      <div className="ownerlist">
      <div className="ownerr">    <img src="https://i.imgur.com/7H3I9YU.jpeg" alt="" className="owner-img"/>
        <p className="ownername">3uday</p>
        <p className="adminrank eranl">Founder</p></div>
      </div>
    
   

    </div>
</div>
<p className="edss">rp.tunisianhoods.com</p>
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
 
export default withRouter (Staff);