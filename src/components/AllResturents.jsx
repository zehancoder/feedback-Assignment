import { Contain } from "./commonItems/Container";
import { HeadingOne } from "./commonItems/Title";
import { Cards } from "./commonItems/Card";
import myData from "../dataBase/Data.json";
import { Link } from "react-router-dom";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { GoSortAsc } from "react-icons/go";
export const AllResturents = () => {
  return (
    <>
      <Contain className="pb-14">
        <div className="flex flex-col lg:flex-row mt-4 justify-between gap-4">
          <div className="py-5 px-3 w-full lg:w-[50%]">
            <h3 className="text-lg md:text-xl font-bold font-roboto">
              <Link to="/">Home</Link> / All restaurants
            </h3>
            <div className="flex items-center mt-5 gap-4">
              <HeadingOne className="">
                best restaurants in singapore
              </HeadingOne>
              <Dropdown>
                <DropdownTrigger>
                  <div className="px-2 border border-[#5E5E5E] rounded-full py-1 flex items-center gap-2 cursor-pointer" >
                    <GoSortAsc className="text-2xl"></GoSortAsc>
                    <p className="text-xs font-medium md:text-[14px] text-[#5E5E5E] leading-[16.14px]">
                      Sort
                    </p>
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" className="border shadow bg-white border-[#E6E6E6] px-4 py-3 rounded-lg font-roboto text-[15px]">
                  <DropdownItem  className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg">All Feedback</DropdownItem>
                  <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg">Highest rated</DropdownItem>
                  <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg">oldest rated</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-7">
              {myData.trendsCard.map(
                ({ img, heading, text, stars, rating, review }, i) => (
                  <Link to="/BellaItalia">
                    <Cards
                      key={i}
                      className={"mx-auto mt-4 flex w-full bg-transparent"}
                      img={img}
                      heading={heading}
                      text={text}
                      stars={stars}
                      rating={rating}
                      review={review}
                      animateText={"View All"}
                    ></Cards>
                  </Link>
                )
              )}
            </div>
            <div className="w-full mt-12">
              <Button className="bg-normalBlue text-white font-roboto leading-[22.27px] font-[400] rounded-[23.5px] px-8 py-6 text-[14px] cursor-pointer md:text-[16px]">
                Show More
              </Button>
            </div>
          </div>
          <div className="py-5 px-3 w-full lg:w-[50%]">
            <img src="/homePageImage/maps.png" alt="" />
          </div>
        </div>
      </Contain>
    </>
  );
};
