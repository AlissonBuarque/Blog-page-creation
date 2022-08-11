import React from "react";
import "./styles.css";
import publicImage from "../../assets/imagens/project3.png";
import publicImage1 from "../../assets/imagens/project2.png";


export default function Information() {
    return (
        
        <section>
            <div className="publicPost">
            <h3 className="titlePostCard">Information</h3>      
                <div className="publicImg col-lg-3col-lg-3">
                    <div>
                        <div>
                            <img class="card-img-top p-2"  src={publicImage} alt=""/>
                            <div className="publicTextAling">
                                <h5 className="titleCard">Boost Startup</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={publicImage1} alt="" class="card-img-top p-2" />
                            <div className="publicTextAling">
                                <h5 className="titleCard">Together</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

