import Contact from "../components/Contact";
import EsignSubscription from "../components/EsignSubscription";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Esigns from "../components/Esigns";
import Description from "../components/Description";
import EsignBanner from "../components/EsignBanner";
import EsignCard from "../components/EsignCard";
import { useEffect } from "react";

function Esign() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
      <Header />
      <EsignBanner/>
      <EsignCard/>
      <Description/>
      <Esigns/>
      <EsignSubscription />
      <div className="w-full flex justify-center">
      <NavLink to="/subscription">
      <button className="p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin">
          pricing of the products
        </button>
      </NavLink>
      </div>

      <Contact />
    </>
  );
}

export default Esign;
