import React from "react";
import "./styles.css";
import headerImg from "../../img/header-img.svg";

export default function FeaturedPost() {
    return (
        <div className="featured-post-container">
            <div>
                <p className="featured-post-date">July 24, 2020</p>
                <h2 className="featured-post-title">Mussum Ipsum, cacilds vidis litro abertis.</h2>
                <p className="featured-post-description">
                Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Atirei o pau no gatis, per gatis num morreus.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
                Delegadis gente finis, bibendum egestas augue arcu ut est.Casamentiss faiz malandris se pirulitá.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Aenean aliquam molestie leo, vitae iaculis nisl. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Interagi no mé, cursus quis, vehicula ac nisi.
                </p>
            </div>
            <div className="headerImg">
                <img src={headerImg}/>
            </div>
        </div>


    );

}

