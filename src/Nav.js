import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return ( 
            <div className="nav-div">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="selected">
                            <i className="fas fa-user"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName="selected">
                            <i className="fas fa-laptop-code"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos" activeClassName="selected">
                            <i className="fas fa-icons"></i>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" activeClassName="selected">
                            <i className="fas fa-info-circle"></i>
                        </NavLink>
                    </li>

                    
                    
                </ul>

            </div>
        )
    }

}

export default Nav