import { NavLink } from "react-router";
import "./Navbar.css"

export default function Navbar() {
    return(
        <div className="navbar">
            <NavLink to="/">AIOT</NavLink>

            <div className="navbar-pages">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/library">Library</NavLink>
            </div>
        </div>
    )
}