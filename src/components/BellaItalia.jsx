import { Contain } from "./commonItems/Container";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { HeadingTwo } from "./commonItems/Title";
import { Button } from "@heroui/react";
import { useState } from "react";
import { ViewAll } from "./ViewAllImg";

export const BellaItaliaItem = () => {
  let [showImg, setShowImg] = useState(false);
  const showAllImg = () => {
    setShowImg(!showImg);
    console.log("hello");
  };
  return (
    <>
      <div
        className={`${
          showImg ? `backdrop-brightness-50` : `backdrop-brightness-100`
        }`}
        onClick={showAllImg}
      >
        <Contain>
          <h3 className="text-lg md:text-xl font-bold font-roboto">
            <Link to="/">Home</Link> / BellaItalia
          </h3>
        </Contain>
        <div className="pb-16">
          <div
            className={`"max-w-[1600px] relative bg-cover px-3 mx-auto mt-3 pb-24 bg-[url(/homePageImage/BellaPage.png)] py-16 " ${
              showImg ? `blur-md` : `blur-none`
            }`}
          >
            <div className="absolute top-0 left-0 h-full w-full md:w-[80%] lg:w-[50%]">
              <img src="/homePageImage/darkImg.png" className="h-full" alt="" />
            </div>

            <Contain className="py-3 relative">
              <h1 className="text-3xl z-50 md:text-4xl lg:text-5xl font-bold font-lexend text-white">
                Bella italia
              </h1>
              <div className="flex items-center mt-4 gap-3">
                <img src="/homePageImage/stars/stars(3).png" alt="" />
                <p className="text-xs font-bold text-white mt-3 font-roboto md:text-[15px]">
                  5.0 <span className="font-[400]">(834 reviews)</span>
                </p>
              </div>
              <p className="text-xs font-roboto md:text-[15px] text-white mt-7 leading-[22.27px] font-[400]">
                The lorem ipsum is, in printing, a series of meaningless words{" "}
                <br /> used temporarily to calibrate a layout. <br />
                The lorem ipsum is, in printing, a series of meaningless words{" "}
                <br /> used temporarily to calibrate a layout.
              </p>
              <div className="flex items-center text-white gap-2 mt-16">
                <FaLocationDot className="text-xl" />
                <p className="text-[14px] mt-2 font-roboto md:text-[16px] text-white  leading-[22.27px] font-[400]">
                  Singapour, Bishan-Ang Mo Kio Park{" "}
                </p>
              </div>
              <div className="flex items-center text-white gap-2 mt-5">
                <MdWatchLater className="text-xl" />
                <p className="text-[14px] mt-2 font-roboto md:text-[16px] text-white  leading-[22.27px] font-[400]">
                  7j/7, 08:00 - 22:00
                </p>
              </div>
              <div className="absolute -bottom-56 left-[50%] transform -translate-[50%]">
                <img src="/homePageImage/curcleLogo.png" alt="" />
              </div>
            </Contain>
          </div>
        </div>
        <Contain className="py-14 relative">
          {/* viewing all images */}
          <div
            className={`transition-all duration-300 ${
              showImg ? `block` : `hidden`
            }`}
          >
            <ViewAll
              className={`absolute top-0 left-[50%] transform -translate-x-[50%] z-10`}
            />
          </div>

          <div className={`${showImg ? `blur-md` : `blur-none`}`}>
            <HeadingTwo>Discover our magnificent place in photos</HeadingTwo>
            <p className="text-[14px] font-roboto md:text-[16px] text-[#5E5E5E] mt-6 leading-[18.75px]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to <br /> calibrate a layout.The lorem ipsum is,
              in printing.
            </p>
            <div className="mt-8  px-3 flex gap-2  items-center justify-center rounded-xl overflow-hidden ">
              <div className="relative lg:h-[548px] py-6 flex items-center  lg:justify-end lg:w-[50%] ">
                <img
                  src="/BellaItalia/hotel(1).png"
                  className="w-full"
                  alt=""
                />
                <div>
                  <Button
                    className="flex cursor-pointer absolute bottom-12  md:bottom-20 lg:bottom-12 2xl:bottom-6 left-8 lg:left-16 2xl:left-16 p-2 px-2  md:px-4 py-1 md:py-3 bg-white rounded-full"
                    onClick={showAllImg}
                  >
                    <img
                      src="/BellaItalia/viewIcon.png"
                      className="w-4 md:w-auto"
                      alt=""
                    />
                    <p className="text-xs md:text-[14px] font-medium font-roboto text-normalBlack">
                      View all photos (7)
                    </p>
                  </Button>
                </div>
              </div>
              <div className=" flex items-center  gap-2 lg:w-[50%]">
                <div className="space-y-2 ">
                  <img src="/BellaItalia/hotel(2).png" alt="" />
                  <img src="/BellaItalia/hotel(3).png" alt="" />
                </div>
                <div className="space-y-2">
                  <img src="/BellaItalia/hotel(5).png" alt="" />
                  <img src="/BellaItalia/hotel(4).png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* more informaiton */}
          <div className="py-8">

          </div>
        </Contain>
      </div>
    </>
  );
};
