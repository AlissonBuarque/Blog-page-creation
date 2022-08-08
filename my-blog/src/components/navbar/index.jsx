import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
    return (
        <nav className="navbar">  
            <div>
                <Link className="logo" to="/">
                <span><h3>Meu Blog DEV</h3></span>
                </Link>
            </div>

            <div className="navBarHover">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/post">Post</Link>
                <Link className="nav-link" to="/contact">Contato</Link>
            </div>
            <div>
                <button class="loginButton" type="submit"> Login </button>
            </div>
            

        </nav>
    );
}