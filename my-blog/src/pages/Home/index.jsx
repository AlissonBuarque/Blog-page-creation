import React from "react";
import FeaturedPost from "../../components/featured-post";
import Information from "../../components/informacoes";
import Autor from "../../components/autor-badge";


export default function Home() {
    return (
        <div>
            <FeaturedPost />

            <Autor />
            <Information />

        </div>
    );
}