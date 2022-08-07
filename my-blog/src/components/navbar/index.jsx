import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
    return (
        <nav className="navbar">  
            <div>
                <Link className="logo" to="/">
                <h3>Meu Blog DEV</h3>
                </Link>
            </div>

            <div>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/post">Post</Link>
                <Link className="nav-link" to="/contact">Contato</Link>
            <button class="" type="submit">Login</button>
            </div>
            

        </nav>
    );
}