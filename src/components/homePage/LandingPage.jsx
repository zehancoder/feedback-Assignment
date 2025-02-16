import { Contain } from "../commonItems/Container";
import { LinksItem } from "../Links";
import myData from "../../dataBase/Data.json";
import { Cards } from "../commonItems/Card";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeadingOne } from "../commonItems/Title";
import { Button } from "@heroui/react";
import { NavLink } from "react-router-dom";
import { Activities } from "../ActivitiesCard";
import { FooterItem } from "../commonItems/Footer";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute cursor-pointer opacity-80 z-10 top-[45%] px-3 py-3 bg-white text-xl rounded-full -right-5 transform -translate-[50%]"
    >
      <FaArrowRight />
      <div className={className} style={{ display: "none" }}>
        Hello
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute cursor-pointer opacity-80 z-10 top-[45%] px-3 py-3 bg-white text-xl rounded-full left-5 transform -translate-[50%]"
    >
      <FaArrowLeft />
      <div className={className} style={{ display: "none" }}>
        Hello
      </div>
    </div>
  );
}
export const LandingPages = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <div style={{ margin: "0px" }}> {dots} </div>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          padding: "4px",
          width: "3px",
          height: "3px",
          marginTop: "20px",
          borderRadius: "100%",
          backgroundColor: "white",
        }}
      ></div>
    ),

    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <LinksItem />
        <Contain className={"slider-container py-20"}>
          <div className="bg-normalBlue px-10 py-8 pb-20 rounded-xl">
            <h1 className="text-2xl md:text-3xl lg:text-3xl lg:ml-5 font-[400] font-Lexend text-white mb-8">
              Find the best restaurant ratings below
            </h1>
            <Slider {...settings} className="flex items-center justify-center ">
              {myData.CaruselCard.map(
                ({ img, heading, text, stars, rating, review }, i) => (
                  <Cards key={i}
                    className={"mx-auto"}
                    img={img}
                    heading={heading}
                    text={text}
                    stars={stars}
                    rating={rating}
                    review={review}
                  ></Cards>
                )
              )}
            </Slider>
          </div>
        </Contain>
        <Contain className={"py-8 pb-14"}>
          <div className="mt-3">
            <HeadingOne className={"mb-2"}>The latest trends</HeadingOne>
            <div className="flex flex-wrap items-center justify-between gap-4">
              {myData.trendsCard.map(
                ({ img, heading, text, stars, rating, review , }, i) => (
                  <Cards key={i}
                    className={"mx-auto mt-4"}
                    img={img}
                    heading={heading}
                    text={text}
                    stars={stars}
                    rating={rating}
                    review={review}
                    animateText={"View All"}
                  ></Cards>
                )
              )}
            </div>
            <h1 className="font-lexend text-lg md:text-xl lg:text-2xl mt-16 text-center font-[400] text-darkBlack">
              Discover more cool restaurants
            </h1>
            <div className="w-full flex items-center justify-center mt-6">
              <NavLink to="/allResturents">
                <Button className="bg-normalBlue text-white font-roboto leading-[22.27px] font-[400] rounded-[23.5px] px-8 py-6 text-[14px] cursor-pointer md:text-[16px]">
                  Show More
                </Button>
              </NavLink>
            </div>
          </div>
        </Contain>
        <div className="py-14">
          <div className="bg-normalGray py-6 ">
            <Contain className="px-4">
              <div className="grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12 px-5  md:pl-14 lg:pl-20">
                  <h1 className="text-lg md:text-xl mt-12 font-extrabold leading-[32.5px] text-darkBlack font-lexend lg:text-2xl">
                    MyFeedback for Business has <br /> resources to help you
                    plan, start, <br /> grow, and advertise your small <br />{" "}
                    business
                  </h1>
                  <p className="text-xs mt-4 md:mt-6 md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                    The lorem ipsum is, in printing, a series of meaningless
                    words <br /> used temporarily to calibrate a layout.
                  </p>
                  <Button className="text-white mt-8 md:mt-14 text-xs lg:text-[15.5px] leading-[18.16px] bg-darkBlack rounded-full cursor-pointer py-3 lg:py-6 px-4 lg:px-8 tracking-wider">
                    Explore MyFeedback business
                  </Button>
                </div>
                <div className="lg:col-span-6 col-span-12 px-5 lg:mt-0 mt-12">
                  <img src="/homePageImage/appertMent.png" alt="" />
                </div>
              </div>
            </Contain>
          </div>
        </div>
        <Activities/>
        <FooterItem/>
      </div>
    </>
  );
};
