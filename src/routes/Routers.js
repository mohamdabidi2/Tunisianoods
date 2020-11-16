import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import AdminDash from '../components/AdminDashBoard/DashBoard';
import UserDashBoard from '../components/dashboardUser';
import EmailConfirmation from '../components/emailConfermation';
import Login from '../components/login';
import Register from '../components/register';
const Routers = () => {
    return ( 
        <>
        <Router>

            <Route exact path='/' component={()=><Login/>}/>
            <Route exact path='/admin/:id' component={()=><AdminDash />}/>

            <Route exact path='/confirm' component={()=><EmailConfirmation  />}/>

            <Route exact path='/Register' component={()=><Register/>}/>
            <Route exact path='/dashboard/:id' component={()=><UserDashBoard/>}/>


        </Router>
        </>
     );
}
 
export default Routers;