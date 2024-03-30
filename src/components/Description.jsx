import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Description() {
  useEffect(() => {
    gsap.to(".box17", {
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

    gsap.to(".box18", {
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
        className="box box17 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box18 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]"
        src={box4}
        alt="box4"
      />

      <div className={` mx-auto ${styles.paddingX}`}>
        <div>
          <h1
            className={`${styles.heroHead2Text}  text-white uppercase text-center`}
          >
            <span className="text-black">
              BLOCKCHAIN-BACKED UPLOAD
            </span>
          </h1>
        </div>
      </div>

      <div
        className={`mt-[40px] w-full md:max-w-[44rem]  lg:max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-[2.5rem]">
          <div className={`text-center ${styles.heroSubText}`}>
            Why should you upload to the chain?
          </div>
          <div className="flex flex-col gap-6 justify-center text-center">
            <div className="text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
              Uploading to the chain upgrades your assets in a{" "}
              <span className="text-[#5379FE]">facade</span> of ways,
               the most important being.
            </div>
            <div className="text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
              <span className="text-[#5379FE]">Immutability:</span> A document
              once stored on the chain cannot be removed, displaced or edited.
              This helps protect the integrity of your data.
            </div>{" "}
            <div className="text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
              <span className="text-[#5379FE]">Impenetrability:</span>{" "}
              Blockchain technology is superior to the technology used for
              hacking prevalent in current times. Once on the chain, your assets
              become immune to hacking. This further helps in ensuring that the
              data most precious to you is safeguarded from unwanted guests.
            </div>{" "}
            <div className="text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
              <span className="text-[#5379FE]">Verifiability:</span> Every
              document uploaded singularly receives the badge of verification
              from Miyagi. This prevents questions raised against the integrity
              of your document as it was verified pre-hand. Any changes made to
              your document if dropped in the verify now section will receive a
              prompt stating that this file does not match the data of the file
              uploaded by you, thus it shall not be verified. Verification has
              far-reaching use-cases and can drastically reduce the time spent
              on manually verifying your documents.
            </div>{" "}
            <div className="text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
              <span className="text-[#5379FE]">Time-stamp:</span> Every document
              uploaded to the chain receives a badge stating the exact time and
              date at which the document was verified. This helps users and
              third-party institutions in tracking their uploaded documents.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
