import React from 'react'
import { withRouter } from 'react-router-dom';

import logo from "../../resourses/thLogo.png"
const Home = (props) => {
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
        <main>
            <div className="intro">
                <h1 className="introtitle">Welcome To</h1>
                <h2 className="introtitle">Tunisian Hoods Roleplay</h2>
                <p className="introdes">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aliquid quas, aut fuga, nobis, doloribus unde dolorum blanditiis commodi voluptate inventore sed eos voluptates minima tempora tenetur. A, tenetur vitae.</p>
                <div className="intro-btn">
                <a target="_blank" href="https://discord.gg/thoods"  ><button className="btnintro2">Join Our Discord</button></a>
                <a  href="fivem://connect/rp.tunisianhoods.com" ><button className="btnintro3">Join Server</button></a>
                
                </div>
            </div>
            <section className="partee1">
                <img src={logo} alt="" id="logopartie2" />
                <h1 className="qan">WHO WE ARE?</h1>
                <p className="partee2des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque, qui commodi quos distinctio eum nihil, ipsa amet animi modi unde mollitia, consectetur id officiis illo quam saepe quae suscipit!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi aliquam placeat laboriosam, at sunt maiores! Minima quidem commodi, quisquam ad non asperiores nam provident sit, labore qui, illum mollitia fuga?</p>
                <div className="desss">
                    <div className="activityes">
                        <h3 className="desss-aa">ACTIVE COMMUNITY</h3>
                        <div className="bardes"></div>
                        <p className="para-aa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi eius saepe minus placeat voluptas alias impedit facerum quam illo et ullam minima, sunt dolorem sit repudiandae. Pariatur.</p>
                    </div>
                    <div className="activityes">
                        <h3 className="desss-aa">AWARDING MEMBERS</h3>
                        <div className="bardes"></div>
                        <p className="para-aa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis modi distinctio eaque obcaecati voluptatibus quis,</p>
                    </div>
                    <div className="activityes">
                        <h3 className="desss-aa">CONSISTENT UPDATES</h3>
                        <div className="bardes"></div>
                        <p className="para-aa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi eius saepe minus placeat voluptas alias impedit facere ratione harum quam illo et ullam minima, sunt dolorem sit repudiandae. Pariatur.</p>
                    </div>
                    <div className="activityes">
                        <h3 className="desss-aa">FAIR & HONEST LEADERSHIP</h3>
                        <div className="bardes"></div>
                        <p className="para-aa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Effnisi eiusfnisi eiusfnisi eius fnisi eius saepe minus placeat voluptas alias impedit facere ratione harum quam illo et ullam minima, sunt dolorem sit repudiandae. Pariatur.</p>
                    </div>
                </div>
            </section>
            <section id="join">
                <h1 id="join-title">HOW TO JOIN TUNISIAN HOODS</h1>
                <div className="parts-to-join">
                    <div className="parts33">
                        <p className="icod"><i class="fas fa-user-plus"></i></p>
                        <h4 className="tit-join">REGISTER</h4>
                        <p className="des-joins">Simply <span className="spes"  onClick={()=>props.history.push('/Register')}>Register</span> on our Website and check your email to confirm.</p>

                    </div>
                    <div className="parts33"><i class="fas fa-chevron-right fls"></i></div>
                    <div className="parts33">
                        <p className="icod"><i class="fas fa-user-check"></i></p>
                        <h4 className="tit-join">WHITELIST</h4>
                        <p className="des-joins">After you Register, you can introduce yourself to us <span className="spes"  onClick={()=>props.history.push('/dash/whitelistapplication')}>here</span></p>
                       
                    </div>
                    <div className="parts33"><i class="fas fa-chevron-right fls"></i></div>
                    <div className="parts33">
                        <p className="icod"><i class="fab fa-discord"></i></p>
                        <h4 className="tit-join">DISCORD</h4>
                        <p className="des-joins">Download <span className="spes" ><a target="_blank" href="https://discord.com/">Discord</a></span> and click <span className="spes"><a href="https://discord.gg/thoods">here</a></span > once installed</p>

                    </div>
                </div>
            </section>
            <section id="numbers">
                <h1 className="numberstitel">OUR NUMBERS
</h1>
                <h2 className="stitle-numbers">SOME OF <span className="ddz">THE COOL FACTS</span> ABOUT US</h2>
                <div className="allnum">
                <div className="numbersall">
                    <p className="numbersparts">14,273</p>
                    <p className="numbersparts2 tit-join">ACTIVE MEMBERS

</p>
                </div>
                <div className="numbersall">
                    <p className="numbersparts">4</p>
                    <p className="numbersparts2 tit-join">YEARS OF GAMING



</p>
                </div>
                <div className="numbersall">
                    <p className="numbersparts">3</p>
                    <p className="numbersparts2 tit-join"> SEASONS



</p>
                </div>
                </div>
                <div className="games">
                    <h1 className="numberstitel">GAMES WE PLAY
</h1>
<div className="rulesplay">
    <div className="partsrulesgames">
    <i class="fas fa-server sal-animate fet" data-sal="fade-in-icon"></i>
    <h3 className="eerule tit-join">OUR SERVERS</h3>
    <p className="text-ss des-joins">We own multiple servers for a varity of games, supported by our community donations.</p>
    </div>
    <div className="partsrulesgames">
    <i class="fas fa-gavel sal-animate fet" data-sal="fade-in-icon"></i>
    <h3 className="eerule tit-join ">OUR RULES</h3>
    <p className="text-ss des-joins">We have a zero tolerance for unfair play, all members must not use hacks, cheats, mods, or glitches.</p>
    </div>
    <div className="partsrulesgames">
    <i class="far fa-clock sal-animate fet" data-sal="fade-in-icon"></i>
    <h3 className="eerule tit-join">YOUR LIFE</h3>
    <p className="text-ss des-joins">Life comes first, you play on the days your available and convenient for you</p>
    </div>
</div>
                </div>
               <div className="fivem">
               <a href="fivem://connect/rp.tunisianhoods.com" class="button_style_greey btnintro3">Join Server</a>
               </div>
            </section>
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
    </div>);
}

export default withRouter(Home) ;