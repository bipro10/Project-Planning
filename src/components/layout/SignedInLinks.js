import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () =>  {
    return ( 
         <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating waves-effect waves-light red lighten-1">B</NavLink></li>
        </ul>
    );
}
 
export default SignedInLinks;