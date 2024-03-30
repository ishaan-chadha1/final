import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function SubscriptionBanner() {
  useEffect(() => {
    gsap.to(".box1", {
      scrollTrigger: {
        trigger: ".trigger0",
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
        trigger: ".trigger0",
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
      className={`trigger0 relative w-full min-h-[45vh] lg:pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto `}
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
            Documents uploaded on the <br/> chain are stored in a <br/> decentralized manner on <br/> Miyagi
            </span>
          </h1>
        </div>
      </div>

      <div
        className={`mt-[40px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-[0.5rem]">
          <div className={`text-center ${styles.heroSubText} font-semibold`}>
          Why should you upload to the chain?
          </div>
          <div className="text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7 ">
          Uploading your data on the chain opens up avenues for your data <br/> to become : (followed by the 4 prompts)
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionBanner;
