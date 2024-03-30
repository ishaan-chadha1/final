import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Believe from "../components/Believe";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Power from "../components/Power";
import { useEffect } from "react";

function Philosophy() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return ( <>
    <Header/>
    <Hero/>
    <Power/>
    <About/>
    <Believe/>
    <Location/>
    <Footer/>
    </> );
}

export default Philosophy;