import React from "react";
import "./styles.css";
import publicImage from "../../assets/imagens/project3.png";
import publicImage1 from "../../assets/imagens/project2.png";


export default function Public() {
    return (
        
        <section id="gallery">
            <div className="publicPost container">
            <h3 className="titlePostCard">Information</h3>      
                <div className="publicImg row">
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                            <img src={publicImage} alt="" class="card-img-top" />
                            <div className="publicTextAling">
                                <h5 className="titleCard">Boost Startup</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                                <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                            <img src={publicImage1} alt="" class="card-img-top" />
                            <div className="publicTextAling">
                                <h5 className="titleCard">Together</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                                <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

