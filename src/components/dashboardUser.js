import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
const UserDashBoard = (props) => {
	const logout=()=>{
		localStorage.setItem('user','')
		props.history.push('/')
	  }
	  useEffect(() => {
        localStorage.getItem('user')==""?props.history.push('/log'):console.log("")
        
    }, [])
    return ( <div className='userdashall'>
<div className="toid">
<div className='userdashall1'>
<h1 className="Tunisianhoods Tunisianhoods1"onClick={()=>{props.history.push('/')}}>Tunisian Hoods</h1>
<ul className="dropmenu">
    <li>My Account
        <ul className="dropmenumenu">
            <li className="drop-menu-item">Profile</li>
            <li className="drop-menu-item">Messages</li>
            <li className="drop-menu-item">Tickets</li>
            <li className="drop-menu-item" onClick={logout}>Log out</li>
           
        </ul>
    </li>
</ul>
        </div>
</div>
        <div className='userdashall2'>
            <div id="responsive-admin-menu">
	<div id="responsive-menu">
		<div class="menuicon">≡</div>
	</div>
	
	<div id="logo"></div>


	<div id="menu">
			<a onClick={()=>props.history.push('/home/whitelistApp')}><i class="icon-dashboard"></i><span > 
			Whitelist Application</span></a>
			<a href="" title="News"><i class="icon-bullhorn"></i><span> Open Ticket</span></a>
			<a href="" title="Pages"><i class="icon-file-alt"></i><span> Rules</span></a>
			<a href="" title="Media" class="submenu" name="media-sub"><i class="icon-eye-open"></i><span>  
			Donate</span></a>
	
			

	
	
			
		
	
	</div>



</div>

<div id="content-wrapper" className="bg-1"><div className="block-wari"><h1>Whitelist Application</h1>
<div className="applicationinputs">

<div className="valuesinputs">
<p className="app-text">Name In Real Life :</p>
<input type="text" placeholder="FirstName lastName" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">Age :</p>
<input type="number" placeholder="23" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">Why did you choose to join TH Server/Community ? :</p>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">Do you have any Experience in RP ? :</p>
<div className="radiobtns">
	<span>NO</span><input type="radio" name="t1" id="yes"/>
	<span>YES</span><input type="radio" name="t1" id="no"/>

</div>
</div>
<div className="valuesinputs">
<p className="app-text">if Yes on which servers have you played ? :</p>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">What's your character backstory ?</p>
<textarea name="" id="" cols="61" rows="5"></textarea>
</div>
<div className="valuesinputs">
<p className="app-text">What's The Meaning Of RP :</p>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">What is Powergaming ? </p>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">Examples of Powergaming </p>
<input type="text" name="" id="" className="app-values"/>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">What is Metagaming ?</p>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">Examples of Metagaming </p>
<input type="text" name="" id="" className="app-values"/>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">What Is The New Life Rule ? </p>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">Examples of New Life Rule ?  </p>
<input type="text" name="" id="" className="app-values"/>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">What IS Revenge Killing ? </p>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">What Is Greenzone/Redzones ? (Define Greenzones/Redzones + Min 2 Examples Each) </p>
<textarea name="" id="" cols="61" rows="5"></textarea>
</div>
<div className="valuesinputs">
<p className="app-text">How to use /me and /Do ? </p>
<input type="text" name="" id="" className="app-values"/>
</div>
<div className="valuesinputs">
<p className="app-text">What is Cop baiting ? </p>
<input type="text" name="" id="" className="app-values"/>
</div>
<h3>Situation :</h3>
<p>chnoua l ghalet fel scéne w kan s7e7a 9oul rahi s7e7a</p>
<div className="valuesinputs">
<p className="app-text">Enty w sahbek ta3mlou fi bank jekom chkoun kartech 3likom taya7 sahbek w hrab
ja l 7ekem bch yetfawedh m3akom tlabtou el hélico ma tjich w el chouk ma yet7attech
w yjiboulkom ems ... 3amlou elli tlabtouh w jaboulkom ems d5al lel bank 9ayem
sahbek w houa 5arej chafek haz sla7ek 3la hostage w m5alli el 2 lo5rin ye5i 
5raj 7ka lel 7akem ba3d 2 min bel wa9t d5al el 7akem 9talkom el 3 w 5arrej el raha2n
labes 3lehom . </p>
<textarea name="" id="" cols="61" rows="5"></textarea>
</div>


</div>

<button>Send</button>






</div>



</div>



        </div>
    </div>
     );
}
 
export default withRouter(UserDashBoard);