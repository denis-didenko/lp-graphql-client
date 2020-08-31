import React from 'react';

import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-title">Common</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-title">Coders</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/generator">Generator LP urls</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blocks">Blocks list</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-title">Managers</div>
        </div>
    );
};

export default Sidebar;
