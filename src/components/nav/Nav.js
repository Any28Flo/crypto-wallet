import React from 'react'

import {optionsNav} from './optionsNav'
import NavItem from "./NavItem";
const Nav = () =>{
    return(
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                {optionsNav.map((option,index) =>{
                    return(
                        <NavItem  key={index} path={option.path} pathname={option.pathname}/>
                    )
                })}
            </nav>
        </div>
    )
};
export default Nav;