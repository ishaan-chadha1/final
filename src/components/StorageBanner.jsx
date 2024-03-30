import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function StorageBanner() {
  useEffect(() => {
    gsap.to(".box1", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        scrub: 1,
      },
      x: -500,
      y: 200,

      ease: Power1,
      duration: 2,
    });

    gsap.to(".box2", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        scrub: 1,
      },
      x: 200,
      y: 200,

      ease: Power1,
      duration: 2,
    });
  }, []);

  return (
    <section
      className={`trigger background relative w-full min-h-[100vh] pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto `}
    >
      <motion.img
        className="box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box2 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]"
        src={box4}
        alt="box4"
      />

      <div className={` mx-auto ${styles.paddingX}`}>
        <div>
          <h1
            className={`${styles.heroHead2Text}  text-white uppercase text-center`}
          >
            <span className="text-black">
            IPFS-POWERED DECENTRALISED <br/> STORAGE SUBSCRIPTION 
            </span>
          </h1>
        </div>
      </div>

      <div
        className={`mt-[40px] w-full md:max-w-[44rem]  lg:max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-6 text-center">
            <div className="text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
            We at <span className="text-[#5379FE]">Miyagi</span> offer storage powered by IPFS technology which stores your documents in a decentralised fashion. This provides an additional layer of security as compared to centralised data storage solutions thus maintaining the integrity of your assets.
            </div>{" "}
            <div className="text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
            Why should you opt for decentralised storage over centralised storage?
            </div>{" "}
            <div className="text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
            Centralised storages store all your data in one place. This means that it has a single point of failure meaning an error anywhere in the system would cause the entirety of it to collapse, thus posing a danger to the security of your assets.
            </div>{" "}
            <div className="text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
            Decentralised storage stores your data using InterPlanetaryFileSystem technology where your data is broken down into 256 bits and scattered all across the world. You may be wondering how is that helpful. In order to access your data a hacker would need to have access to all 256 keys which is impossible. Only you have access to the keys of your data, thus safeguarding you
            </div>
          </div>
        </div>
    </section>
  );
}

export default StorageBanner;
