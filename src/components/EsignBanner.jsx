import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function EsignBanner() {
  useEffect(() => {
    gsap.to(".box1", {
      scrollTrigger: {
        trigger: ".trigger20",
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
        trigger: ".trigger20",
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
      className={`trigger20 background relative w-full min-h-[100vh] pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto `}
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
            <span className="text-black">E-SIGN</span>
          </h1>
        </div>
      </div>

      <div
        className={`mt-[40px] w-full md:max-w-[44rem]  lg:max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-6 text-center">
          <div className="text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
            Blockchain-based IPFS e-signatures provide a cutting-edge way of
            digitally signing documents by cryptographically hashing files and
            storing that fingerprint in a tamper-evident decentralized ledger,
            enabling reliable independent verification of signatures without a
            central authority. This eliminates single points of failure and
            allows e-signatures and signed agreements to retain high integrity
            even if the storage layer is compromised. Additional benefits over
            traditional e-sigs include immutable audit trails, non-repudiation
            of signers, seamless workflows integration via smart contracts, and
            cost-effective scaling. By harnessing the security of blockchain
            decentralization along with distributed storage, blockchain
            e-signatures enable resilient, transparent and automated digital
            agreements that protect against tampering, spoofing and
            obsolescence. This makes them appealing for security-focused
            organizations and ideally positioned for emerging legislation around
            blockchain contractual validity.
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default EsignBanner;
