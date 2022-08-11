import React from "react";
import "./styles.css";
import profileImage from "../../assets/imagens/profile.png";

export default function Autor() {
    return (
        <div className="author-dabge-container">
            <img className="author-dabge-image" src={profileImage} />
            <div>
                <h3>Mussum Cacilds Ipsum</h3>
                <p>Desenvolvedor</p>
            </div>
        </div>
    );
}

