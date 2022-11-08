import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <h1>User Data</h1>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar