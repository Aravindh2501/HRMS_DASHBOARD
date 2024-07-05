// src/components/MobSidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/weblogo.png";
import { routes } from "../constants/sidebarRoutes";
import { useSelector } from "react-redux";

const MobSidebar = ({ mobMenu, open }) => {
    const userRole = useSelector((state) => state.auth.userRole);
    const filteredRoutes = routes.filter((route) => route.role === userRole);

    return (
        <div className="mobsidebar">
            <div className="side_top">
                <div className="logo_img">

                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </div>
            <div className="side_middle">
                <ul className="sidebar_nav">
                    {filteredRoutes.map((route) => (
                        <li
                            key={route.key}
                            className="sidebar_item "
                            onClick={mobMenu}
                        >
                            <NavLink
                                to={route.path}
                                className="nav_link"
                                activeClassName="active"
                            >
                                {route.icon}
                                <p>{route.label}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobSidebar;
