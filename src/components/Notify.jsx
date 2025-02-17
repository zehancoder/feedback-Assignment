import { cn } from "@heroui/react";
import { LuDownload } from "react-icons/lu";
import { MdClose } from "react-icons/md";
export const NotifyItem = ({ className, times, setNotify, setMassege }) => {
  return (
    <div
      className={cn(
        "p-3 absolute top-[3%] left-[50%] transform -translate-x-[50%] z-50 bg-[#F6F6F6] rounded-lg md:w-auto w-72",
        className
      )}
    >
      <div className="relative">
        <img src="/BellaItalia/notify.png" alt="" />
        <div>
          <p className="text-center font-bold text-xl font-lexend mt-4 md:text-2xl lg:text-3xl">
            Menu Bella Italia
          </p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="px-4 cursor-pointer py-3 border border-normalBlue rounded-full justify-center gap-3 text-normalBlue flex items-center">
            <LuDownload className="text-xl font-extrabold" />
            <h3 className="font-medium text-[14px] md:text-[17px] font-roboto">
              Dowload this menu
            </h3>
          </div>
        </div>
        <div
          className="absolute -right-6 -top-6 p-2 text-xl font-bold bg-white rounded-full cursor-pointer"
          onClick={() => {
            setNotify(false)
          }} onChange={setMassege(false)}
        >
          <MdClose />
        </div>
      </div>
    </div>
  );
};
