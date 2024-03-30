import Contact from "../components/Contact";
import Esign from "../components/Esigns";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Pricing() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
      <Header />
      <div className="mt-[10rem] md:mt-[0rem]">
        <Esign />
        <div className="w-full flex justify-center">
          <NavLink to="/storage">
            <button className="p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin">
              why us?
            </button>
          </NavLink>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default Pricing;
