import React from "react";
import FeaturedPost from "../../components/featured-post";
import Post from "../../components/post";
import Public from "../../components/publicaçoes";

export default function Home() {
    return (
        <div>
            <FeaturedPost />

            <Post />
            <Public />
        </div>
    );
}