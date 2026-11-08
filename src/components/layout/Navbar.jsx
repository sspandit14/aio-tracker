import { NavLink } from "react-router";
import "./Navbar.css"

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-brand">
                    <NavLink to="/" className="navbar-title">
                        AIO
                    </NavLink>
                    <p className="navbar-subtitle">tracktrack :3</p>
                </div>

                <div aria-label="Main navigation" className="navbar-pages">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/library">Library</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </div>
        </div>
    )
}
