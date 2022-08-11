import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/Home";
import Post from "../components/post"
import Signin from "../pages/Signin/index";
import Signup from "../pages/Signup/index";

import useAuth from "../hooks/useAuth";
import { Fragment } from "react";



const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <Signin />;
  };

export default function AplicationRoutes(){
    return (
        <BrowserRouter>
        <Fragment>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Private Item={Post} />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
        </Fragment>
        </BrowserRouter>
    );
}