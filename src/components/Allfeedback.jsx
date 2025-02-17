import myData from "../dataBase/Data.json";
import { NavLink } from "react-router-dom";
import { Button } from "@heroui/react";
import { Cards } from "./commonItems/Card";
import { HeadingOne } from "./commonItems/Title";
export const Feedback = () => {
  return (
    <div>
      <div className="py-8">
        {myData.FeedbackCard.map(({ name, location, stars, date, text }, i) => (
          <div key={i} className="mt-6">
            <div className="bg-whiteGray flex items-start py-3 gap-5 rounded-lg px-4 mx-auto w-[96%] md:max-w-[90%]">
              <div className="w-10">
                <div className=" bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <img
                    src="/homePageImage/icons/user.png"
                    className="w-5"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div>
                  <h3 className="text-[15px] font-semibold text-normalBlack">
                    {name}
                  </h3>
                  <p className="text-xs  md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                    {location}
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <p>
                    <img src={stars} alt="" />
                  </p>
                  <p className="text-xs  md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                    {date}
                  </p>
                </div>
                <p className="text-xs mt-3 md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="w-full flex items-center justify-center mt-6">
          <NavLink to="/">
            <Button className="bg-normalBlue text-white font-roboto leading-[22.27px] font-[400] rounded-[23.5px] px-8 py-6 text-[14px] cursor-pointer md:text-[16px]">
              Show more reviews
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="py-16">
        <HeadingOne className="pl-8 md:pl-12 lg:pl-14 2xl:pl-20">Also discover...</HeadingOne>
        <div className="flex flex-wrap items-center justify-around gap-4 mt-6">
          {myData.DiscoverItem.map(
            ({ img, heading, text, stars, rating, review }, i) => (
              <Cards
                key={i}
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
      </div>
    </div>
  );
};
