import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar-comp">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* TODO: Toggle the NavBar */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav nav-tabs me-auto">
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
                </div>
            </nav>
        </div>
    )
}