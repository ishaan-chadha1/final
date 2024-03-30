import { styles } from "../styles";
import { Offer4, Offer5, Offer6, Image1 } from "../assets";
import { motion } from "framer-motion";
import { box1, box9, } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function OfferTwo() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  useEffect(() => {
    gsap.to(".box8", {
        scrollTrigger: {
          trigger: ".trigger2",
          start: "top top",
          scrub: 1,
        },
        x: -500,
        y: 200,
        z: 200,
        ease: Power1,
        duration: 2,
      });
  
      gsap.to(".box9", {
        scrollTrigger: {
          trigger: ".trigger2",
          start: "top top",
          scrub: 1,
        },
        x: 300,
        y: 200,
        z: 200,
        ease: Power1,
        duration: 2,
      });

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 1024);
      };
  
   
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      }

  }, []);

  if (!isSmallScreen) {
    return null;
  }

  return (
    <section className={`trigger2 w-full relative min-h-[100vh] pb-[5rem] mx-auto`}>
      <motion.img
        className="box box8 absolute top-[10vh] left-[0px] rotate-[-40.33]  hidden md:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box9 absolute top-[60vh] right-[0px] rotate-[-40.33]"
        src={box9}
        alt="box"
      />

      <div className="mt-[50px] md:mt-[100px]">
        <h1
          className={`${styles.heroHeadText}  text-white uppercase text-center`}
        >
          <span className="text-black">
            What does have to {"<"}MIYAGI{">"} offer?
          </span>
        </h1>
      </div>

      <div
        className={`gallery mt-[20px] md:mt-[100px] w-7xl mx-auto ${styles.paddingX} items-start lg:w-[80vw] flex flex-row justify-between`}
      >
        <div className="w-full">
        <img src={Offer6} alt="" className="img1 w-full rounded-[20px]" />
          <div className="border-2 mt-4 p-4 leading-6 tracking-wide rounded-[20px]">
            
            <h1 className="text-[#5379FE] text-[22px] mb-4">Sign Documents</h1>
            <p className="text-[#807E87] text-[0.95rem]">
              Are you tired of the hassles and uncertainties of traditional
              document signing methods? Say goodbye to the days of printing,
              scanning, and mailing documents. Welcome to the future of secure,
              efficient, and tamper-proof document signing with Blockchain
              technology!
            </p>
          </div>
          <img
              src={Offer5}
              alt=""
              className="img2 rounded-[20px] mt-8 md:mt-[6rem] w-full lg:mt-[3.5rem]"
            />
          <div className="border-2 mt-8 p-4 leading-6 tracking-wide rounded-[20px]">
           
            <h1 className="text-[#5379FE] text-[22px] mb-4">Store Data</h1>
            <p className="text-[#807E87] text-[0.95rem]">
              Discover the pinnacle of data security and trust in decentralized
              storage, harnessed by Blockchain. Bid adieu to centralized
              vulnerabilities and reclaim dominion over your prized information.
            </p>
          </div>
          <img
              src={Offer4}
              alt=""
              className="img3 last rounded-[20px] mt-8 md:mt-[6rem] md:mb-[3rem] w-full lg:mt-[3.5rem]"
            />
          <div className="border-2 mt-8 p-4 leading-6 tracking-wide rounded-[20px]">
           
            <h1 className="text-[#5379FE] text-[22px] mb-4">
              Verify Documents
            </h1>
            <p className="text-[#807E87] text-[0.95rem]">
              Tired of relying on traditional, easily forgeable verification
              methods? Enter a new era of unassailable trust and transparency
              with Blockchain-powered document verification ensure authenticity
              and trust while bidding farewell to counterfeiting concerns.
            </p>
          </div>
        </div>
        {/* <div className=" ">
          <div className="photos">
            <img src={Offer1} alt="" className="img1 h-full rounded-[20px]" />
            <img
              src={Offer2}
              alt=""
              className="img2 rounded-[20px] md:mt-[6rem] h-full lg:mt-[3.5rem]"
            />
            <img
              src={Offer3}
              alt=""
              className="img3 last rounded-[20px] md:mt-[6rem] md:mb-[3rem] h-full lg:mt-[3.5rem]"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default OfferTwo;
