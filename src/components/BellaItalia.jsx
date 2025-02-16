import { Contain } from "./commonItems/Container";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

export const BellaItaliaItem = () => {
  return (
    <>
      <div>
        <Contain>
          <h3 className="text-lg md:text-xl font-bold font-roboto">
            <Link to="/">Home</Link> / BellaItalia
          </h3>
        </Contain>
        <div className="max-w-[1600px] relative bg-cover px-3 mx-auto mt-3 pb-24 bg-[url(/homePageImage/BellaPage.png)] py-16 ">
          <div className="absolute top-0 left-0 h-full w-full md:w-[80%] lg:w-[50%]">
            <img src="/homePageImage/darkImg.png" className="h-full" alt="" />
          </div>

          <Contain className="py-3 relative">
            <h1 className="text-3xl z-50 md:text-4xl lg:text-5xl font-bold font-lexend text-white">
              Bella italia
            </h1>
            <div className="flex items-center mt-4 gap-3">
              <img src="/homePageImage/stars/stars(3).png" alt="" />
              <p className="text-xs font-bold text-white mt-3 font-roboto md:text-[15px]">5.0 <span className="font-[400]">(834 reviews)</span></p>
            </div>
            <p className="text-xs font-roboto md:text-[15px] text-white mt-7 leading-[22.27px] font-[400]">The lorem ipsum is, in printing, a series of meaningless words <br /> used temporarily to calibrate a layout. <br />
            The lorem ipsum is, in printing, a series of meaningless words <br /> used temporarily to calibrate a layout.</p>
            <div className="flex items-center text-white gap-2 mt-16">
                <FaLocationDot className="text-xl"/>
                <p className="text-[14px] mt-2 font-roboto md:text-[16px] text-white  leading-[22.27px] font-[400]">Singapour, Bishan-Ang Mo Kio Park </p>
            </div>
            <div className="flex items-center text-white gap-2 mt-5">
                <MdWatchLater className="text-xl"/>
                <p className="text-[14px] mt-2 font-roboto md:text-[16px] text-white  leading-[22.27px] font-[400]">7j/7, 08:00 - 22:00</p>
            </div>
            <div className="absolute -bottom-56 left-[50%] transform -translate-[50%]">
                <img src="/homePageImage/curcleLogo.png" alt="" />
            </div>
          </Contain>
        </div>
      </div>
    </>
  );
};
