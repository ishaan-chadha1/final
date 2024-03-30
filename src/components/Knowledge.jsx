import { styles } from "../styles";
import { useRef } from "react";
import gsap from "gsap";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { box1, box2, box3,box4, } from "../assets";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

function Knowledge() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
      useEffect(() =>{

        gsap.to(".box14",{
          scrollTrigger:{
            trigger:".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub:1,
          },
          x:-500,
          y: 200,
          z: 200,
          ease:Power1,
          duration: 3
        })
        
        gsap.to(".box15",{
          scrollTrigger:{
            trigger:".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub:1,
          },
          x:-800,
          y:-200,
          z: 200,
          ease:Power1,
          duration: 3
        })
        
        
        gsap.to(".box16",{
          scrollTrigger:{
            trigger:".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub:1,
          },
          x:600,
          y: 200,
          z: 200,
          ease:Power1,
          duration: 3
        })
        gsap.to(".box17",{
          scrollTrigger:{
            trigger:".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub:1,
          },
          x:600,
          y: 200,
          z: 200,
          ease:Power1,
          duration: 3
        })
        
        },[]);

    
  return (
    <section className={`trigger4 w-full relative mt-[6rem] md:mt-[0rem] mx-auto  `} ref={ref}>
      <motion.img className="box box14 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block"  
          
           src={box1} alt="box"/>
           <motion.img className="box box15 absolute bottom-[-19vh] left-[20vw] hidden xl:inline-block rotate-[-40.33] "  
         
           src={box3} alt="box"/>
            <motion.img className="box box16 absolute top-[25vh] right-[0px] hidden xl:inline-block rotate-[-40.33]"  
          
           src={box4} alt="box"/>

<motion.img className="box box17 absolute bottom-[0vh] right-[0vw] xl:bottom-[-25vh] xl:right-[10vw] rotate-[-40.33]"  
           
           src={box2} alt="box"/>
         {inView && (
      <motion.div
        className={`pt-0 md:pt-[30vh] pb-[30vh]  w-7xl mx-auto ${styles.paddingX} items-start lg:w-[80vw]`}
        initial={{
          opacity: 0,
         
        }}
        animate={{
          opacity: 1,
        
        }}
        transition={{ duration: 1, delay:0.5 }}
      >
        <h1
          className={`${styles.heroHead1Text} quote  text-white uppercase text-center`}
        >
          <span className="text-black  ">
          With the knowledge that your digital belongings will be preserved forever and are easily verifiable on the chain, you can enjoy a stress-free seamless interaction with our timeless technology.
          </span>
        </h1>
      </motion.div>
      )}
    </section>
  );
}

export default Knowledge;
