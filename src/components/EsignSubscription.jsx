import { styles } from "../styles";
import { Image1 } from "../assets";
import { motion } from "framer-motion";
import { box1, box8, box13 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function EsignSubscription() {
  useEffect(() => {
    gsap.to(".box14", {
      scrollTrigger: {
        trigger: ".trigger5",
        start: "top top",
        scrub: 1,
      },
      x: -500,
      y: 200,
      ease: Power1,
      duration: 2,
    });

    gsap.to(".box15", {
      scrollTrigger: {
        trigger: ".trigger5",
        start: "top top",
        scrub: 1,
      },
      x: 300,
      y: 200,
      ease: Power1,
      duration: 2,
    });

    gsap.to(".box16", {
      scrollTrigger: {
        trigger: ".trigger5",
        start: "top top",
        scrub: 1,
      },
      x: 600,
      y: 200,
      ease: Power1,
      duration: 2,
    });
  }, []);

  return (
    <section
      className={`trigger5 w-full relative md:pt-[100px] pb-[100px] min-h-[80vh]  md:min-h-[100vh] mx-auto bg-[]`}
    >
      <motion.img
        className="box box14 absolute top-[3vh] left-[0px] xl:top-[10vh] xl:left-[0px] rotate-[-40.33]  hidden xl:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box15 absolute top-[15vh] right-[0px] xl:top-[25vh] xl:right-[0px] rotate-[-40.33]  hidden md:inline-block"
        src={box8}
        alt="box"
      />
      <motion.img
        className="box box16 absolute top-[80vh] right-[10vw] xl:top-[80vh] xl:right-[20vw] rotate-[-40.33]  hidden md:inline-block"
        src={box13}
        alt="box"
      />
      <div className={` max-w-7xl mx-auto ${styles.paddingX} items-start`}>
        <div>
          <h2
            className={`${styles.heroHeadText}  text-white uppercase text-center`}
          >
            <span className="text-black">
              BLOCKCHAIN-BASED ESIGN <br /> SUBSCRIPTION
            </span>
          </h2>
        </div>

      </div>
      <div className="w-[100%] h-[50px] md:h-[520px] xl:h-[150px] p-6 flex flex-col gap-4 md:gap-6">
        <h1 className={`${styles.heroHead3Text} uppercase text-black`}>
          pick your plan
        </h1>
        <div className="flex flex-row gap-5">
          <input
            type="radio"
            name="checkbox"
            class="check"
            id="radio1"
            checked
          />
          <label for="radio1">
            <div class="container">
              <div class="cRadioBtn">
                <div class="overlay"></div>
                <div class="drops xsDrop"></div>
                <div class="drops mdDrop"></div>
                <div class="drops lgDrop"></div>
              </div>
            </div>
            <h2 className="capitalize text-[20px]" >monthly billing</h2>
          </label>

          <input type="radio" name="checkbox" class="check" id="radio2" />
          <label for="radio2">
            <div class="container">
              <div class="cRadioBtn">
                <div class="overlay"></div>
                <div class="drops xsDrop"></div>
                <div class="drops mdDrop"></div>
                <div class="drops lgDrop"></div>
              </div>
            </div>
            <h2 className="capitalize text-[20px]" >yearly billing</h2>
          </label>
        </div>
      </div>
      <div className={`${styles.paddingX} mt-[2rem] md:mt-[4rem] flex flex-wrap justify-center gap-6`}>
        <div className="w-[312px] h-[400px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className={`${styles.heroHead3Text} uppercase text-white`}>
              base
            </h1>
            <div className="flex flex-col gap-5">
              <p className=" text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]">
                Individual Golf professional ({"<"}500 Clients)
              </p>
              <p className=" text-slate-200 text-[0.9rem] md:text-base leading-relaxed">
                He Perfect Match For Starting Golf Professionals And Golf
                Professionals With a Smaller Clientele.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-[25px] md:text-[40px] lowercase">
              $7.81
              <span className="text-white text-2xl lowercase leading-[25px] md:leading-[30px]">
                /MO
              </span>
            </h1>
            <div className="w-full text-center my-2">
              <motion.button
                className="min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Choose Base
              </motion.button>
            </div>
            <h3 className="text-center text-white text-[0.9rem] md:text-base font-normal leading-normal">
              Additional Agenda {"<"}11 Month
            </h3>
          </div>
        </div>
        <div className="w-[312px] h-[400px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className={`${styles.heroHead3Text} uppercase text-white`}>
              base
            </h1>
            <div className="flex flex-col gap-5">
              <p className=" text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]">
                Individual Golf professional ({"<"}500 Clients)
              </p>
              <p className=" text-slate-200 text-[0.9rem] md:text-base leading-relaxed">
                He Perfect Match For Starting Golf Professionals And Golf
                Professionals With a Smaller Clientele.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-[25px] md:text-[40px] lowercase">
              $7.81
              <span className="text-white text-2xl lowercase leading-[25px] md:leading-[30px]">
                /MO
              </span>
            </h1>
            <div className="w-full text-center my-2">
              <motion.button
                className="min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Choose Base
              </motion.button>
            </div>
            <h3 className="text-center text-white text-[0.9rem] md:text-base font-normal leading-normal">
              Additional Agenda {"<"}11 Month
            </h3>
          </div>
        </div>
        <div className="w-[312px] h-[450px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className={`${styles.heroHead3Text} uppercase text-white`}>
              plus
            </h1>
            <div className="flex flex-col gap-5">
              <p className=" text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]">
                Individual Golf Professional ({">"}500 Clients) & Smaller Academies ({"<"} Less Than 3 Professionals
              </p>
              <p className=" text-slate-200 text-[0.9rem] md:text-base leading-relaxed">
                For The Golf Professionals Who Already Have Many Teaching Hours and Who Have a Large Customer Database and For The Small Golf Academies.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-[25px] md:text-[40px] lowercase">
              $14.71
              <span className="text-white text-2xl lowercase leading-[25px] md:leading-[30px]">
                /MO
              </span>
            </h1>
            <div className="w-full text-center my-2">
              <motion.button
                className="min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Choose Base
              </motion.button>
            </div>
            <h3 className="text-center text-white text-[0.9rem] md:text-base font-normal leading-normal">
              Additional Agenda {"<"}18 Month
            </h3>
          </div>
        </div>
        <div className="w-[312px] h-[400px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className={`${styles.heroHead3Text} uppercase text-white`}>
              premium
            </h1>
            <div className="flex flex-col gap-5">
              <p className=" text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]">
                Larger Academies (More Than 3 Professionals)
              </p>
              <p className=" text-slate-200 text-[0.9rem] md:text-base leading-relaxed">
                The Ultimate Solution For The Bigger Academies With a Larger Clientele.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-[25px] md:text-[40px] lowercase">
              $22.52
              <span className="text-white text-2xl lowercase leading-[25px] md:leading-[30px]">
                /MO
              </span>
            </h1>
            <div className="w-full text-center my-2">
              <motion.button
                className="min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Choose Base
              </motion.button>
            </div>
            <h3 className="text-center text-white text-[0.9rem] md:text-basee font-normal leading-normal">
              Additional Agenda {"<"}25 Month
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EsignSubscription;
