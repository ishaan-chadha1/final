import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutThree() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    gsap.to(".box10", {
      scrollTrigger: {
        trigger: ".trigger4",
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
        trigger: ".trigger4",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: -800,
      z: 200,
      ease: Power1,
      duration: 1.5,
    });

    gsap.to(".box12", {
      scrollTrigger: {
        trigger: ".trigger4",
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
        trigger: ".trigger4",
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
      className={`trigger4 w-full min-h-[70vh] md:pt-[10vh] pb-[10vh] relative mx-auto `}
      ref={ref}
    >
      <motion.img
        className="box box10 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box11 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[20vw] md:hidden"
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
      <div
        className={`mt-[40px] md:mt-[70px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${styles.paddingX1} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-[2rem]">
          <div
            className={`text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize`}
          >
            Miyagi Labs pioneers secure and tamper-proof blockchain-based
            E-signatures, ensuring authenticity and trust in the digital
            document signing process.
          </div>
          <div
            className={`text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize`}
          >
            Miyagi Labs distinguishes itself through a cost-effective and
            premium blockchain-based E-signature solution, leveraging the
            inherent advantages over centralized servers. Our platform delivers
            cutting-edge E-signature capabilities that are both affordable and
            of the highest quality, disrupting the traditional cost dynamics
            associated with premium services.
          </div>
          <div className="text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize">
            Miyagi Labs stands as a beacon of innovation, offering businesses a
            cost-effective yet premium alternative to traditional E-signature
            solutions, with the added advantage of decentralization and enhanced
            security over centralized counterparts.
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutThree;
