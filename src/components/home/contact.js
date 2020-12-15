import React from 'react'
import { withRouter } from 'react-router-dom';
import logo from "../../resourses/thLogo.png"

const Contact = (props) => {
    return (<div>
        <div className="header-d">
            <header className="header-a ">
                <div className="headerParts">

                    <ul className="menuHeader">
                        <li className="menuheader-item" onClick={() => props.history.push('/')}>Home</li>
                        <li className="menuheader-item menuheader-item-drop">Application
                        <ul className="menuheader-item-menu">
                                <li className="menuheader-item-item fdg" onClick={() => props.history.push('/home/staff')}>Staff</li>
                                <li className="menuheader-item-item fdg" onClick={() => props.history.push('/fivem/admins/rules/all')}>Rules</li>
                                <li className="menuheader-item-item" onClick={() => props.history.push('/home/whitelistApp')}>Whitelist Application</li>
                                <li className="menuheader-item-item">Staff Application</li>
                                <li className="menuheader-item-item">Bug Report</li>
                                <li className="menuheader-item-item">Open Ticket</li>

                            </ul>

                        </li>
                        <li className="menuheader-item  menuheader-item-drop"><span className="donate" onClick={() => props.history.push('/home/donation/')}>Donation</span>
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
                {localStorage.getItem('user') == "" ? <div className="headerParts headerParts3">
                    <p className="exuser">
                        Existing user? <span className="signinbn" onClick={() => props.history.push('/log')}>Sign In</span>  </p>
                    <button className="btnlogin" onClick={() => props.history.push('/Register')}>Sign Up</button>
                </div> : <p className="btnlogin" onClick={() => props.history.push('/log')}> <i class="fas fa-user"></i> My Account</p>}

            </header>
        </div>
        <main className="maincontact">
<div className="texts">
<h1 className="contact-title">We would love to hear from you
</h1>
            <p className="contact-intro">Please submit your information and we will get back to you.<br/>
            <span className="subtxt"> Or Tag us  <a target="_blanck" href="https://discord.com/invite/JEJst4ZfRB">Here</a></span></p>
</div>
            
            <div className="contact-parts">
                <div className="contactpart">

                    <div className="input-contact">
                        <input type="text" className="contact-inp" placeholder="Full Name"/>
                        <input type="text" className="contact-inp" placeholder="Discord ID"/>
                    </div>

                    <div className="input-contact">
                        <input type="email" className="contact-inp" placeholder="E-mail address"/>
                        <input type="text" className="contact-inp" placeholder="Subject"/>
                    </div>
                    <textarea name="" id="" cols="160" rows="10" placeholder="Your message here" className="text-contact-aria"></textarea>
                    <button className="contact-btn btn btn-danger ">Send Message</button>

                </div>
                <div className="input-contact input-contact2">
<div className="clorff">
    <h1 className="clorff-title">Help</h1>
    <p className="clorff-txt">Need help or have any query? Don't hesitate, you can directly shoot us an email or <span className="subtxt"> Tag us  <a target="_blanck" href="https://discord.com/invite/JEJst4ZfRB">Here</a></span></p>
    <p className="clorff-txt">You can move to FAQs or Discord Server to get more information about our server.</p>
</div>
                </div>


            </div>

        </main>
        <footer className="footer-a">
            <p className="copyright rp">Copyright © 2020 Tunisian Hoods, LLC.<br /> All Rights Reserved.
Powered by our Developers</p>
            <div className="socialmedia">
                <a href="" className="dddzall">   <i class="fab fa-discord dddz"></i></a>
                <a href="" className="dddzall"><i class="fab fa-instagram-square dddz"></i></a>
            </div>
            <p className="rp">rp.tunisianhoods.com</p>
        </footer>
    </div>);
}

export default withRouter(Contact);