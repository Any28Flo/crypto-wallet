import React from 'react';
import {Link} from 'react-router-dom'

const NavItem = props =>{

    return(
        <div className="navbar-brand">
            <Link to={props.path}>
                <p>{props.pathname}</p>
            </Link>

        </div>

    )
};
export default NavItem;