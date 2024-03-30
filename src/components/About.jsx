import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {}, []);

  return (
    <section
      className={`about w-full min-h-[70vh] pt-[10vh] pb-[10vh] flex flex-col gap-[3rem] relative mx-auto `}
      ref={ref}
    >
      <div className={` mx-auto ${styles.paddingX}`}>
        <h1 className={`${styles.heroHead2Text}  text-white text-center`}>
          <span className="text-black">why miyagi ?</span>
        </h1>
      </div>

      <div className="bg-[white] p-2 mx-auto rounded-lg flex flex-row justify-evenly w-[300px] text-center">
        <h1 className="p-2 text-[15px] font-thin">Lorem</h1>
        <h1 className="p-2 text-[15px] font-thin">Lorem</h1>
        <h1 className="p-2 text-[15px] font-thin">Lorem</h1>
      </div>

      {inView && (
        <div
          className={` w-7xl mx-auto ${styles.paddingX} items-start lg:w-[80vw]`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2
            className={`${styles.heroHead3Text}  text-white uppercase text-center`}
          >
            <span className="text-black ">
              That is a lot to make work and it does get stressful for the team
              but{" "}
              <span className="text-[#5379FE]">
                who doesn’t like a challenge?
              </span>
            </span>
          </h2>
        </div>
      )}

      <div
        className={`w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${styles.paddingX1} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-[4rem]">
          <div
            className={`text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7  capitalize`}
          >
            {"<"}
            <span className="text-[#5379FE]">
              Try out Miyagi for free and let us know how you feel about it.
            </span>{" "}
            Your opinion matters to us. A Long time{" "}
            <br className="hidden md:inline-block" /> ago, someone asked one of
            our founders,
            <span className="text-[#5379FE]">“What does the user want?’.</span>
          </div>
          <div className="text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7  capitalize">
            That simple yet
            <br />
            Complex question still resonates with us and remains one of the core
            philosophies of <span className="text-[#5379FE]"> Miyagi</span>.
            Your feedback adds to the landscape of{" "}
            <span className="text-[#5379FE]"> Miyagi</span> and with your help,
            one day we would find the solution to{" "}
            <br className="hidden md:inline-block" /> That Resonating Question
            {">"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
