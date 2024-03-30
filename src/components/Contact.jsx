import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {



  }, []);

  return (
    <section
      className={`trigger6 lg:pt-[20vh] pb-[20vh] w-full xl:min-h-[73vh] flex flex-row justify-center relative mx-auto  `}
      ref={ref}
    >
     
      <motion.img
        className="box box9 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[0vw] rotate-[-40.33]"
        src={box3}
        alt="box"
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
     

      <div
        className={`${styles.paddingX} max-w-[90rem] flex flex-col lg:flex-row justify-center gap-6`}
      >
        <div className={`w-full lg:w-[50%] text-center lg:text-left`}>
          <span className={`${styles.heroHeadText}  text-black uppercase`}>
          Coming Soon, currently in the Beta-Testing phases, Reach out for Early-Access
          </span>
    
          <div className="mt-6">
              <motion.button
                className=" min-w-[160px] min-h-[50px] font-poppins cursor-pointer text-[16px] rounded-3xl  border-2 p-2 text-white bg-[#5379FE] "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact Us
              </motion.button>
            </div>
            
        </div>

        <div className="w-full lg:w-[50%] flex flex-wrap justify-center gap-6">
          <div className="w-[312px] md:w-[330px] h-[220px] md:h-[280px] lg:w-[218px] lg:h-[348px] xl:w-[310px] xl:h-[320px] bg-blue-500 rounded-3xl p-4 md:p-6 flex flex-col gap-4 text-center">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="text-white text-[25px] md:text-[35px] xl:text-[40px]">SDK</h1>

              <p className=" text-white text-[15px] lg:text-[15px] xl:text-[20px] capitalize leading-[25px] md:leading-[30px]">
              Revolutionize Your Tech Landscape with Miyagi SDK: Where Innovation Meets Seamless Integration

              </p>
            </div>
            <div>
              <motion.button
                className="min-w-[140px] min-h-[40px] md:min-w-[160px] md:min-h-[50px] cursor-pointer text-[16px] rounded-xl  border-2 p-2 text-black bg-white "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
          <div className="w-[312px] md:w-[330px] h-[220px] md:h-[280px] lg:w-[218px] lg:h-[348px] xl:w-[310px] xl:h-[320px] bg-blue-500 rounded-3xl p-4 md:p-6 flex flex-col gap-4 text-center">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="text-white text-[25px] md:text-[35px] xl:text-[40px]">API</h1>

              <p className=" text-white text-[15px] lg:text-[15px] xl:text-[20px] capitalize leading-[25px] md:leading-[30px]">
              Seamless Integration, Infinite Possibilities: Miyagi API, Your Gateway to Decentralized Excellence

              </p>
            </div>
            <div>
              <motion.button
                className=" min-w-[140px] min-h-[40px] md:min-w-[160px] md:min-h-[50px] cursor-pointer text-[16px] rounded-xl  border-2 p-2 text-black bg-white "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
