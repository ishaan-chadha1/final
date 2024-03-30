import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
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
      x: -500,
      y: 200,

      ease: Power1,
      duration: 2,
    });

    gsap.to(".box3", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        scrub: 1,
      },
      x: 600,
      y: 200,

      ease: Power1,
      duration: 2,
    });

    gsap.to(".box4", {
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
        className="box box2 absolute top-[75vh] left-[200.47px] hidden md:inline-block md:top-[75vh] md:left-[200.47px] rotate-[-40.33]"
        src={box2}
        alt="box"
      />

      <motion.img
        className="box box3 absolute top-[80vh] right-[0px] md:hidden  xl:inline-block  xl:top-[80vh] xl:right-[300.47px] rotate-[-40.33]"
        src={box3}
        alt="box"
      />

      <motion.img
        className="box box4 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]"
        src={box4}
        alt="box4"
      />

      <div className={` mx-auto ${styles.paddingX}`}>
        
          <h1
            className={`${styles.heroHead2Text}  text-white uppercase text-center`}
          >
            <span className="text-black">
              {"<"}Our <span className="text-[#5379FE]">PHILOSOPHY</span>
              {">"}
            </span>
          </h1>
        
      </div>

      <div
        className={`mt-[40px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-[2rem]">
          <div className={`text-center ${styles.heroSubText}`}>
            {"<"}If we had to explain to{" "}
            <span className="text-[#5379FE]">Miyagi</span> in the simplest of
            terms, We are a <br className="hidden lg:inline-block"/> company which gives right to data ownership to the
            client{">"}
          </div>
          <div className="text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7 ">
          <span className="text-[#5379FE]">In an era</span> where people’s data is being exploited by big tech giants
            for their ulterior motives,we want to equip people with a tool which
          <span className="text-[#5379FE]"> would give them an option to not let their data be exploited</span> by the
            big tech companies or perhaps how <span className="text-[#5379FE]">John Lennon</span> would’ve said it.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
