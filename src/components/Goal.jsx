import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import {  motion } from "framer-motion";
import { box1, box2, box3,box4, } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

function Goal() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

      useEffect(() =>{

        gsap.to(".box10",{
          scrollTrigger:{
            trigger:".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub:1,
          },
          x:-500,
          y: 200,
          z: 200,
          ease:Power1,
          duration: 1
        })
        
        gsap.to(".box11",{
          scrollTrigger:{
            trigger:".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub:1,
          },
          x:-800,
          z: 200,
          ease:Power1,
          duration: 1.5
        })
        
        
        gsap.to(".box12",{
          scrollTrigger:{
            trigger:".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub:1,
          },
          x:600,
          y: 200,
          z: 200,
          ease:Power1,
          duration: 2
        })
        gsap.to(".box13",{
          scrollTrigger:{
            trigger:".trigger3",
            start: "top top",
           endTrigger: "bottom bottom",
            scrub:1,
          },
          x:600,
          y: 200,
          z: 200,
          ease:Power1,
          duration: 2.5
        })
        
        },[]);

  return (
    <section className={`trigger3 w-full xl:min-h-[73vh] relative mx-auto  `} ref={ref} >
      <motion.img className="box box10 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block"  
          
           src={box1} alt="box"/>
           <motion.img className="box box11 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[20vw] rotate-[-40.33]"  
          
           src={box2} alt="box"/>
            <motion.img className="box box12 absolute top-[-5vh] right-[0px] xl:top-[7vh] rotate-[-40.33]"  
          
           src={box4} alt="box"/>

<motion.img className="box box13 absolute bottom-[-25vh] right-[10vw] rotate-[-40.33]  hidden xl:inline-block"  
          
           src={box3} alt="box"/>
           {inView && (
      <motion.div
        className={`pt-[30vh] pb-[30vh] w-7xl mx-auto ${styles.paddingX} items-start lg:w-[80vw]`}
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
            Our goal at Miyagi is to make your interactions with this innovative
            technology as humane as possible while providing you with endless
            inspiration for your creative journey.
          </span>
        </h2>
      </motion.div>
           )}
    </section>
  );
}

export default Goal;
