import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Login from '../components/login';
import Register from '../components/register';
const Routers = () => {
    return ( 
        <>
        <Router>
            <Route exact path='/' component={()=><Login/>}/>
            <Route exact path='/Register' component={()=><Register/>}/>

        </Router>
        </>
     );
}
 
export default Routers;