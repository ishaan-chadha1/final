import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Contact from "../components/Contact";
import StorageBanner from "../components/StorageBanner";
import StorageSubscription from "../components/StorageSubscription";
import FeatureTwo from "../components/FeatureTwo";
import AboutThree from "../components/AboutThree";


function Storage() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return ( <>
    <Header/>
    <StorageBanner/>
    <FeatureTwo/>
    {/* <StorageSubscription/> */}
    <AboutThree/>
    <Contact/>
    <Footer/>
    </> );
}

export default Storage;