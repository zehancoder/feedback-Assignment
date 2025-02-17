import { cn } from "@heroui/react";
import { MdClose } from "react-icons/md";

export const ViewAll = ({ className, setShowImg }) => {
  return (
    <div className={cn("", className)}>
      <div className="p-4 bg-[#F6F6F6]">
        <div className="relative">
          <img src="/BellaItalia/viewImages/hotel1.png" alt="" />
          <div className="flex absolute gap-2 bottom-3 left-[50%] transform -translate-[50%]">
            <div className="h-1 md:h-2 w-1 md:w-2 rounded-full cursor-pointer bg-[#D9D9D9]"></div>
            <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#D9D9D9] cursor-pointer"></div>
            <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#D9D9D9] cursor-pointer"></div>
          </div>
        </div>
        <div className="mt-4">
          <img src="/BellaItalia/viewImages/Groupe.png" alt="" />
        </div> 
        <div className="absolute -right-3 -top-3 p-2 text-xl font-bold bg-white rounded-full cursor-pointer" onClick={() => (setShowImg(false))}>
          <MdClose/>
        </div>
      </div>
    </div>
  );
};
