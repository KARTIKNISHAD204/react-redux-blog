import React from 'react';
import {NavLink} from 'react-router-dom'

 
const navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                 <NavLink  to ="/"  activeStyle={{color:"black" }}>Home</NavLink>
                </li>
                <li>
                <NavLink  to ="/about"  activeStyle={{color:"black"}}>About</NavLink>
                </li>
                 <li>
                 <NavLink  to ="/privacy" activeStyle={{color:"black"}}>Privacy</NavLink>
                </li>
            </ul>
        </div>
    );
}
 

 
export default navbar;