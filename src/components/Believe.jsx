import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Believe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    gsap.to(".box10", {
      scrollTrigger: {
        trigger: ".trigger3",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: -500,
      y: 200,
      z: 200,
      ease: Power1,
      duration: 1,
    });

    gsap.to(".box11", {
      scrollTrigger: {
        trigger: ".trigger3",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: -900,
      z: 200,
      ease: Power1,
      duration: 1.5,
    });

    gsap.to(".box12", {
      scrollTrigger: {
        trigger: ".trigger3",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: 600,
      y: 200,
      z: 200,
      ease: Power1,
      duration: 2,
    });
    gsap.to(".box13", {
      scrollTrigger: {
        trigger: ".trigger3",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: 600,
      y: 200,
      z: 200,
      ease: Power1,
      duration: 2.5,
    });
  }, []);

  return (
    <section
      className={`pt-[10vh] pb-[10vh] md:pt-[20vh] md:pb-[20vh] trigger3 w-full max-h-[100vh] relative mx-auto `}
      ref={ref}
    >
      <motion.img
        className="box box10 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box11 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[20vw] rotate-[-40.33]"
        src={box2}
        alt="box"
      />
      <motion.img
        className="box box12 absolute top-[-5vh] right-[0px] xl:top-[7vh] rotate-[-40.33]"
        src={box4}
        alt="box"
      />

      <motion.img
        className="box box13 absolute bottom-[-25vh] right-[10vw] rotate-[-40.33]  hidden xl:inline-block"
        src={box3}
        alt="box"
      />
      {inView && (
        <motion.div
          className={` w-7xl mx-auto ${styles.paddingX} flex flex-col gap-10 lg:w-[80vw]`}
          initial={{
            opacity: 0,
           
          }}
          animate={{
            opacity: 1,
          
          }}
          transition={{ duration: 1, delay:0.5 }}
        >
          <h2
            className={`${styles.heroHead1Text}  text-white uppercase text-center`}
          >
            <span className="text-black ">
              If you believe in <span className="text-[#5379FE]"> Data ownership, Tech craftsmanship</span> and <br className="hidden lg:inline-block"/> <span className="text-[#5379FE">Bringing
              the power back to the people,</span> we would<br className="hidden lg:inline-block"/> recommend you try out <span className="text-[#5379FE]">Miyagi.</span> 
            </span>
          </h2>

          <h2
            className={`${styles.heroHead1Text}  text-white uppercase text-center`}
          >
            <span className="text-black ">
              We hope that with your help, <span className="text-[#5379FE]">Miyagi</span> can propel the <br className="hidden lg:inline-block"/> world towards a
              future where the issues relating to<br className="hidden lg:inline-block"/> data ownership are no longer a
              concern.
            </span>
          </h2>
          <h2
            className={`${styles.heroHead1Text}  text-white uppercase text-center`}
          >
            <span className="text-black ">
             <span className="text-[#5379FE]">Together</span> , we shall make a <span className="text-[#5379FE]">difference</span>. 
            </span>
          </h2>
        </motion.div>
      )}
    </section>
  );
}

export default Believe;
