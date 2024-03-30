import { styles } from "../styles";
import { linkedIn, facebook, twitter } from "../assets";

function Footer() {
  return (
    <section
      className={` w-full py-5 bg-[#5379FE]`}
    >
      <div className="flex flex-col text-center md:flex md:flex-row md:justify-between max-w-[80vw] mx-auto">
        <div className="text-white w-[100%] md:w-[60%] lg:w-[50%]">
          <span className="pt-[4px]">@2023 All Rights Reserved</span>
        </div>
        <div className="text-white w-[100%] mt-4 md:mt-[0px] md:w-[45%] lg:w-[50%] xl:w-[25rem] flex flex-row justify-between">
          <div className="hidden lg:inline-block">
          <div className="flex flex-row gap-3 mr-4  ">
          <a href="#"><img src={facebook} className="" alt="" /></a>
            <a href="#"><img src={linkedIn} className="" alt="" /></a>
            <a href="#"><img src={twitter} className="" alt="" /></a>
          </div>
          </div>
          <a href="#" className="pt-[4px]">Privacy Policy</a>
          <a href="#" className="pt-[4px]">Terms of Service</a>
        </div>
        <div className="w-[100%] mt-4 md:hidden">
          <div className="flex flex-row justify-center gap-4  ">
            <a href="#"><img src={facebook} className="" alt="" /></a>
            <a href="#"><img src={linkedIn} className="" alt="" /></a>
            <a href="#"><img src={twitter} className="" alt="" /></a>
          </div>
          </div>
      </div>
    </section>
  );
}

export default Footer;
