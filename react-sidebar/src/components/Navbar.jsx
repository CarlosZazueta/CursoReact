import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../data/SidebarData";
import { IconContext } from "react-icons";
import "./Navbar.css";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar" onClick={() => showSidebar()}>
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={() => showSidebar()} />
                    </Link>
                    <h2 className="navbar-text">Side Navbar</h2>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul
                        className="nav-menu-items"
                        onClick={() => showSidebar()}
                    >
                        <li className="navbar-toggle">
                            <h3 className="menu-bars">Menu</h3>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
