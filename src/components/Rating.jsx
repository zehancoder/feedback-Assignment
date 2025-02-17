import { Contain } from "./commonItems/Container";

export const Rating = () => {
  return (
    <Contain className="border-b border-t border-[#DCDCDC] py-12">
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
  );
};
