import { Contain } from "./commonItems/Container";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/react";
import { GoSortAsc } from "react-icons/go";
export const Rating = () => {
  return (
    <div>
      <Contain className="border-b border-t border-[#DCDCDC] py-12 px-3">
        <div className="max-w-[80%] flex items-center gap-3">
          <div className="w-full lg:w-[50%]">
            <div className="flex gap-6 font-roboto">
              <img src="/BellaItalia/ratingShow.png" className="h-16" alt="" />
              <div>
                <h1 className="font-bold text-darkBlack text-xl md:text-2xl lg:text-3xl">
                  Overall rating
                </h1>
                <p className="text-xs text-[#838383] md:text-[16px] ">
                  834 Reviews
                </p>
                <div className="mt-5">
                  <img src="/homePageImage/stars/stars(3).png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="flex items-center gap-3">
              <p className="text-[15px] text-[#484848] font-roboto">5 stars</p>
              <div className="bg-[#2E95DF] w-[80%] py-1 rounded-full"></div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[15px] text-[#484848] font-roboto">0 star</p>
              <div className="bg-[#D9D9D9] w-[80%] rounded-full">
                <div className="bg-[#2E95DF] w-[60%] py-1 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[15px] text-[#484848] font-roboto">0 star</p>
              <div className="bg-[#D9D9D9] w-[80%] rounded-full">
                <div className="bg-[#2E95DF] w-[40%] py-1 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[15px] text-[#484848] font-roboto">0 star</p>
              <div className="bg-[#D9D9D9] w-[80%] rounded-full">
                <div className="bg-[#2E95DF] w-[30%] py-1 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[15px] text-[#484848] font-roboto">0 star</p>
              <div className="bg-[#D9D9D9] w-[80%] rounded-full">
                <div className="bg-[#2E95DF] w-[20%] py-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Contain>
      <div className="py-8 px-3">
        <div className="flex items-center gap-8">
          <div>
            <Dropdown>
              <DropdownTrigger>
                <div className="px-2 border border-[#5E5E5E] rounded-full py-1 flex items-center gap-2 cursor-pointer">
                  <GoSortAsc className="text-2xl"></GoSortAsc>
                  <p className="text-xs font-medium md:text-[14px] text-[#5E5E5E] leading-[16.14px]">
                    Filter
                  </p>
                </div>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                className="border shadow bg-white border-[#E6E6E6] px-4 py-3 rounded-lg font-roboto text-[15px]"
              >
                <DropdownItem className="text-[17px] font-bold text-center font-roboto">
                  <p className="font-bold text-lg md:text-xl lg:text-2xl leading-[25.78px] tracking-wide px-12">filter by rating</p>
                </DropdownItem>
                <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg flex gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-3xl text-[#E8A641] font-bold">
                      5
                    </p>
                    <img src="/homePageImage/stars/stars(3).png" alt="" />
                  </div>
                </DropdownItem>
                <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg flex gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-3xl text-[#E8A641] font-bold">
                      4
                    </p>
                    <img src="/homePageImage/stars/stars(5).png" alt="" />
                  </div>
                </DropdownItem>
                <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg flex gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-3xl text-[#E8A641] font-bold">
                      3
                    </p>
                    <img src="/homePageImage/stars/stars(6).png" alt="" />
                  </div>
                </DropdownItem>
                <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg flex gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-3xl text-[#E8A641] font-bold">
                      2
                    </p>
                    <img src="/homePageImage/stars/stars(7).png" alt="" />
                  </div>
                </DropdownItem>
                <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg flex gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-3xl text-[#E8A641] font-bold">
                      1
                    </p>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <DropdownTrigger>
                <div className="px-2 border border-[#5E5E5E] rounded-full py-1 flex items-center gap-2 cursor-pointer">
                  <GoSortAsc className="text-2xl"></GoSortAsc>
                  <p className="text-xs font-medium md:text-[14px] text-[#5E5E5E] leading-[16.14px]">
                    Sort
                  </p>
                </div>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                className="border shadow bg-white border-[#E6E6E6] px-4 py-3 rounded-lg font-roboto text-[15px]"
              >
                <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg">
                  All Feedback
                </DropdownItem>
                <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg">
                  Highest rated
                </DropdownItem>
                <DropdownItem className="hover:bg-[#B0C2FF21] hover:text-[#2146C7] rounded-lg">
                  oldest rated
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
