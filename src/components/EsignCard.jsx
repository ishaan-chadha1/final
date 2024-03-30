import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { featurecardthree } from "..";

function FeatureCard({ Image, Image1, heading, content, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div key={index} className="activeBox"
     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
     >
      <div className="inneractiveBox flex flex-col w-[310px] h-full rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
        <div className="featured-image w-[100px] h-[100px] bg-blue-500 rounded-[20px]">
          <img className={`feature-image ${isHovered ? "hidden" : ""}`} src={Image} alt="" />
          <img className={`feature-image1 ${isHovered ? "" : "hidden"}`} src={Image1} alt="" />
        </div>
        <div>
          <h1 className="text-[20px] md:text-[25px] font-normal uppercase">
            {heading}
          </h1>
        </div>
        <div>
          <p className="w-full text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

function EsignCard() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {}, []);

  return (
    <section
      className={`trigger1 w-full xl:min-h-[60vh] relative mx-auto  `}
      ref={ref}
    >
      {inView && (
        <div
          className={`pb-[10vh] w-7xl mx-auto ${styles.paddingX} items-start lg:w-[100vw]`}
        >
          <div className="w-full flex flex-wrap justify-center gap-6">
            {featurecardthree.map((feature, index) => (
              <FeatureCard key={index} index={index} {...feature} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default EsignCard;
