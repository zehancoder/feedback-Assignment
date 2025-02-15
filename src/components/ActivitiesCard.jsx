import Slider from "react-slick";
import myData from "../dataBase/Data.json";
import { HeadingOne } from "./commonItems/Title";
import { Contain } from "./commonItems/Container";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
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
export const Activities = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Contain className="py-12 px-3">
        <HeadingOne className="ml-4">Recents avtivities</HeadingOne>
        <div className="mt-4">
          <Slider
            {...settings}
            className="flex items-center font-roboto justify-center "
          >
            {myData.activitiesCard.map(
              (
                { userImg, name, location, stars, date, text, textTwo, images, discover },
                i
              ) => (
                <div key={i} >
                  <div className="bg-whiteGray py-3 rounded-lg px-4 mx-auto max-w-[90%]">
                    <div className="flex items-center gap-3 ">
                      <div className="px-3 py-3 bg-white rounded-full">
                        <img
                          src="/homePageImage/icons/user.png"
                          className="w-5"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-normalBlack">
                          {name}
                        </h3>
                        <p className="text-xs  md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                          {location}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center mt-5">
                      <p>
                        <img src={stars} alt="" />
                      </p>
                      <p className="text-xs  md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                        {date}
                      </p>
                    </div>
                    <p className="text-xs mt-5 md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">{text}</p>
                    <p className="text-xs mt-8 md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">{textTwo}</p>
                    <div className="flex items-center mt-12 gap-2">
                        {images.map((val)=> (
                            <img src={val} className="w-[75px] sm:w-auto"></img>
                        ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </Contain>
    </>
  );
};
