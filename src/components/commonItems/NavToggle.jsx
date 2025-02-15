import { IoSearch } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { Button } from "@heroui/react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import myData from "../../dataBase/Data.json"

export const ToggleNav = ({menuOpen, setMenuOpen}) => {
    const menuClose = () => {
        setMenuOpen (!menuOpen)
    }
  return (
    <>
      <div className={`fixed font-roboto top-0 h-full transition-all duration-200  ${menuOpen ? `left-0` : `-left-[200%]`}`}>
        <div className="max-w-96 h-full bg-normalBlack opacity-85 relative p-4 py-12">
        <div className=" px-2 flex items-center justify-between flex-wrap gap-3 font-roboto">
          {myData.navberTwo.map(({Text, img, link}, i) => (
            <NavLink key={i} to={link} className={"text-center text-white py-2 font-medium space-y-2"} onClick={menuClose}>
                <img src={img} alt="" className="mx-auto w-5"/>
                <p className="">{Text}</p>
            </NavLink>
          ))}
        </div>
          <div className="py-1 pl-3  pr-1 flex flex-col items-center justify-center ml-2 md:text-base text-[14px] mt-6">
            <input
              className="w-[100%] border border-white text-white py-3 rounded-full px-3 outline-none"
              type="text"
              placeholder="restaurant, hotel, service...."
            />
            <div className="flex w-full gap-3 items-center justify-center border border-white rounded-full px-1 py-1 mt-4">
              <input
                className="w-full  px-3 outline-none text-white"
                type="text"
                placeholder="Singapour..."
              />
              <div className="h-9 flex items-center justify-center rounded-full w-13 bg-white text-normalBlue transition cursor-pointer font-bold hover:opacity-95">
                <IoSearch className="font-bold text-lg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-3">
            <TbWorld className="h-9 w-9 cursor-pointer text-white" />
            <Button className="text-white text-[14px] lg:text-[15.5px] leading-[18.16px] bg-normalBlue rounded-full cursor-pointer py-3 lg:py-6 px-4 lg:px-8 tracking-wider">
              MyFeedback for business
            </Button>
          </div>
          <IoClose className="absolute cursor-pointer right-5 top-5 text-2xl text-white" onClick={menuClose}/>
        </div>
      </div>
    </>
  );
};
