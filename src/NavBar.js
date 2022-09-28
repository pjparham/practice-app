import React from "react";
import { NavLink, Outlet } from "react-router-dom"

function NavBar ({ onChangePage }){

    function handleLinkClick(e) { 
        e.preventDefault()
        onChangePage(e.target.pathname)
    }

    return (
        <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/timer">About</NavLink>
            <NavLink to="favorites">Favorites</NavLink>
        </nav>
    )
}

export default NavBar;
