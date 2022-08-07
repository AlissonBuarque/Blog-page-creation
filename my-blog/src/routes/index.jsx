import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/Home";

export default function AplicationRoutes(){
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<h1>Post</h1>} />
        </Routes>
        </BrowserRouter>
    );
}