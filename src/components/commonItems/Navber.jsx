import { Contain } from "./Container";
import { IoSearch } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import {Button, ButtonGroup} from "@heroui/button";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import { ToggleNav } from "./NavToggle";

export const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <Contain className={"relative px-2"}>
        <div className="flex items-center justify-between py-4 pt-6 font-roboto px-3 lg:px-2 2xl:px-1 fixed  w-[100%] 2xl:w-[1420px]  mx-auto">
          <img src="/homePageImage/Logo.png" alt=""  className="cursor-pointer"/>
          <div className="py-1 pl-3 pr-1 rounded-full hidden lg:flex ml-2 md:text-base text-xs lg:w-[40%] items-center justify-between border border-[#ADADAD]">
            <input
              className="w-[50%] py-2 px-3 outline-none"
              type="text"
              placeholder="restaurant, hotel, service...."
            />
            <div className="h-6 w-0.5 rounded-full bg-[#7A7A7A]"></div>
            <input
              className="w-[50%] py-2 px-3 outline-none"
              type="text"
              placeholder="Singapour..."
            />
            <div className="h-10 flex items-center justify-center rounded-full w-12 bg-normalBlue transition cursor-pointer text-white font-bold hover:opacity-95">
              <IoSearch className="font-bold text-lg"/>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <TbWorld className="h-9 w-9 cursor-pointer"/>
            <Button className="text-white text-xs lg:text-[15.5px] leading-[18.16px] bg-darkBlack rounded-full cursor-pointer py-3 lg:py-6 px-4 lg:px-8 tracking-wider">MyFeedback for business</Button>
          </div>
          <div className="text-3xl px-2 py-2 cursor-pointer rounded-full mx-6 transition  hover:bg-normalGray block lg:hidden" onClick={toggleMenu}>
            <CgMenu/>
          </div>
        </div>
  
      </Contain>
      <div className="h-[100px] bg-transparent">

      </div>
      <ToggleNav menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
    </>
  );
};
