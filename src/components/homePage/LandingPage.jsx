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
                  <Cards
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
        <Contain>
          <div className="mt-3">
            <HeadingOne>The latest trends</HeadingOne>
            <div className="flex flex-wrap items-center justify-between gap-4">
            {myData.trendsCard.map(
                ({ img, heading, text, stars, rating, review }, i) => (
                  <Cards
                    className={"mx-auto mt-4"}
                    img={img}
                    heading={heading}
                    text={text}
                    stars={stars}
                    rating={rating}
                    review={review}
                  ></Cards>
                )
              )}
            </div>
          </div>
        </Contain>
      </div>
    </>
  );
};
