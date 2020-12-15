import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import AdminDash from '../components/AdminDashBoard/DashBoard';
import UserDashBoard from '../components/dashboardUser';
import EmailConfirmation from '../components/emailConfermation';
import Donation from '../components/home/Donation';
import Home from '../components/home/home';
import Rules from '../components/home/rules';
import Staff from '../components/home/Staff';
import Contact from '../components/home/contact';
import WhitelistApplication from '../components/home/whitelistApplication';
import Login from '../components/login';
import Register from '../components/register';
const Routers = () => {
    return ( 
        <>
        <Router>

            <Route exact path='/log' component={()=><Login/>}/>
            <Route exact path='/home/staff' component={()=><Staff/>}/>
            <Route exact path='/home/contactus' component={()=><Contact/>}/>
            <Route exact path='/home/donation' component={()=><Donation/>}/>
            <Route exact path='/home/whitelistApp' component={()=><WhitelistApplication/>}/>

            <Route exact path='/fivem/admins/rules/all' component={()=><Rules/>}/>


            <Route exact path='/' component={()=><Home/>}/>
            <Route exact path='/admin/:id' component={()=><AdminDash />}/>

            <Route exact path='/confirm' component={()=><EmailConfirmation  />}/>

            <Route exact path='/Register' component={()=><Register/>}/>
            <Route exact path='/dashboard/:id' component={()=><UserDashBoard/>}/>


        </Router>
        </>
     );
}
 
export default Routers;