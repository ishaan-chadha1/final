import { styles } from "../styles";
import { motion } from "framer-motion";
import { box1, box2 } from "../assets";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Newsletter() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
 
  return (
    <section className="{`w-full relative min-h-[60vh] md:min-h-[60vh] mx-auto`} mb-[4rem] md:mb-[10rem] overflow-hidden ">
      <motion.img
        className="box absolute top-[-10vh] left-[0px] xl:top-[0vh] xl:left-[0px] rotate-[-40.33] "
        animate={{
          y: [0, 24, 0],
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
        className={`md:mt-[200px] max-w-3xl xl:max-w-4xl mx-auto ${styles.paddingX}`} ref={ref}
      >
        {inView && (
        <motion.div className="p-2  text-center flex flex-col justify-center"
        initial={{
          opacity: 0,
         
        }}
        animate={{
          opacity: 1,
        
        }}
        transition={{ duration: 1, delay:0.5 }}>
          <h1 className="text-slate-950 text-[1.5rem] xl:text-[2.3rem] font-normal leading-[34px] uppercase mb-8">
            Decentralise. Simplify. Digitilise.
          </h1>
          <p className="text-zinc-500 text-[1rem] xl:text-[1.2rem] font-normal leading-[30px] text-center">
            We’re a diverse and passionate team that takes ownership of your
            problems and empowers you to execute your plans. We stay light on
            our feet and truly enjoy delivering great work.
          </p>
        </motion.div>
        )}
      </div>
      <div className={`mt-[5rem] xl:mt-[10rem] max-w-7xl mx-auto ${styles.paddingX} `}>
      <div className="bg-gradient-to-r from-[#E0F5FF] to-[#D4EEFF] p-6 rounded-lg shadow-md max-w-2xl mx-auto my-8 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-center text-[#5379FE] mb-4 animate-pulse">Join our Newsletter</h2>
      <form className="flex flex-col sm:flex-row gap-4 justify-between">
        <input
          className="flex-1 px-4 py-2 text-[#5379FE] bg-[#ffffff] border border-[#5379FE] rounded-md shadow-sm focus:outline-none focus:border-[#5379FE] focus:ring-1 focus:ring-[#5379FE] transition-colors duration-500"
          placeholder="Enter Your Email here..."
          type="email"
        />
        <button className="px-6 py-2 bg-[#5379FE] text-white font-semibold rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-100 transition-colors duration-500">
          Submit
        </button>
      </form>
    </div>
      </div>
    </section>
  );
}

export default Newsletter;
