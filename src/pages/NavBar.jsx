import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar-comp">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    {/* TODO: Toggle the NavBar */}

                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/experience">Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/education">Education</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/skills">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                    </ul>
                    <NavLink className="navbar-brand justify-content-end">Divyanshi Srivastava</NavLink>
                </div>
            </nav>
        </div>
    )
}