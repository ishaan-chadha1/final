import { styles } from "../styles";
import { motion } from "framer-motion";
import { box1, box2 } from "../assets";
import { useEffect } from "react";

function Location() {
  return (
    <section className="location w-full relative pt-[10vh] pb-[10vh] md:pt-[20vh] md:pb-[20vh] lg:pt-[30vh] lg:pb-[30vh] min-h-[40vh] lg:min-h-[60vh] mx-auto overflow-hidden ">
      <motion.img
        className="box20 absolute top-[-5vh] left-[0px] xl:top-[0vh] xl:left-[0px] rotate-[-40.33] "
        animate={{
          y: [0, 14, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        src={box1}
        alt="box"
      />
      <motion.img
        className="box absolute bottom-[0vh] right-[-100px] rotate-[-40.33]  hidden md:inline-block"
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        src={box2}
        alt="box"
      />
      <div
        className={` max-w-3xl xl:max-w-6xl mx-auto ${styles.paddingX} text-center`}
      >
        <h1 className={`${styles.heroHead3Text}`}>
          {"<"}<span className="text-[#5379FE] uppercase">Miyagi</span>{">"}<br/>A <span className="text-[#5379FE]"></span>decentralised application built for the <span className="text-[#5379FE]">curious, </span><br className="hidden lg:inline-block"/>
          Formulated by the <span className="text-[#5379FE]">dreamers</span>  & <span className="text-[#5379FE]">thinkers</span> of the <span className="text-[#5379FE]">Indian Subcontinent</span>.
        </h1>
      </div>
    </section>
  );
}

export default Location;
