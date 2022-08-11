import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
    return (
        <nav className="navbarOut">
            <div>
                <Link className="logo" to="/">
                    <span><h3>Meu Blog DEV</h3></span>
                </Link>
            </div>
            <div className="dFlex">
                <div className="navBarHover">
                    <Link className="nav-link" to="/">Home</Link>
                </div>
                <div className="navBarHover">
                    <Link className="nav-link" to="/contact">Publications</Link>
                </div>
                <div className="navBarHover">
                    <Link className="nav-link" to="/contact">Contato</Link>
                </div>
                <div className="navBarHover">
                    <Link className="nav-link" to="/post">Post</Link>
                </div>
            </div>

            <div className="buttonLoc">
            <div>
                <Link to="/login">
                    <input className="loginButton" type="button" name="btn-login" value="Singnin" />
                </Link>
            </div>
                <Link to="">
                    <input className="buttonExit" type="button" name="btn-exit" value="Logout" />
                </Link>
            </div>
        </nav>
    );
}