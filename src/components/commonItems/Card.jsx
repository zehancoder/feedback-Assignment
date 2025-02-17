import { cn } from "@heroui/react";

export const Cards = ({
  img,
  heading,
  text,
  stars,
  rating,
  review,
  className,
  animateText,
}) => {
  return (
    <>
      <div
        className={cn(
          "bg-whiteGray rounded-[12px] w-72 font-roboto",
          className
        )}
      >
        <div className="flex items-center justify-center ">
          <div className="relative">
            <img src={img} className="w-full bg-cover" alt="" />
            <div className="flex absolute gap-2 bottom-3 left-[50%] transform -translate-[50%]">
              <div className="h-1 md:h-2 w-1 md:w-2 rounded-full cursor-pointer bg-[#D9D9D9]"></div>
              <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#D9D9D9] cursor-pointer"></div>
              <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#D9D9D9] cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h1 className="text-normalBlack font-bold text-lg leading-[22.27px] md:text-[22px]">
            {heading}
          </h1>
          <p className="text-xs md:text-[14px] text-darkGray mt-2 leading-[16.14px]">
            {text}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <img src={stars} className="w-24 md:w-28" alt="" />
            <p className="text-[15px] font-bold text-normalBlack">{rating}</p>
            <p className="text-[15px] text-darkGray">{review}</p>
          </div>
        </div>
      </div>
    </>
  );
};
