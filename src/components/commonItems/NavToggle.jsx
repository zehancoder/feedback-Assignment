import { IoSearch } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { Button } from "@heroui/react";
import { IoClose } from "react-icons/io5";

export const ToggleNav = ({menuOpen, setMenuOpen}) => {
    const menuClose = () => {
        setMenuOpen (!menuOpen)
    }
  return (
    <>
      <div className={`fixed top-0 h-full transition-all duration-200  ${menuOpen ? `left-0` : `-left-[100%]`}`}>
        <div className="max-w-96 h-full bg-normalBlue relative p-4 py-12">
          <div className="py-1 pl-3 pr-1 flex flex-col items-center justify-center ml-2 md:text-base text-[14px] mt-6">
            <input
              className="w-[100%] border border-normalGray py-3 rounded-full px-3 outline-none"
              type="text"
              placeholder="restaurant, hotel, service...."
            />
            <div className="flex w-full gap-3 items-center justify-center border border-normalGray rounded-full px-1 py-1 mt-4">
              <input
                className="w-full  px-3 outline-none "
                type="text"
                placeholder="Singapour..."
              />
              <div className="h-9 flex items-center justify-center rounded-full w-13 bg-white text-normalBlue transition cursor-pointer font-bold hover:opacity-95">
                <IoSearch className="font-bold text-lg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-3">
            <TbWorld className="h-9 w-9 cursor-pointer" />
            <Button className="text-white text-[14px] lg:text-[15.5px] leading-[18.16px] bg-darkBlack rounded-full cursor-pointer py-3 lg:py-6 px-4 lg:px-8 tracking-wider">
              MyFeedback for business
            </Button>
          </div>
          <IoClose className="absolute cursor-pointer right-5 top-5 text-2xl text-white" onClick={menuClose}/>
        </div>
      </div>
    </>
  );
};
