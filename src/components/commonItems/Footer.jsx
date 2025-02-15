import myData from "../../dataBase/Data.json";
export const FooterItem = () => {
  return (
    <>
      <div className="border-t border-[#DCDCDC] py-8 pb-8 px-3">
        <div className="max-w-5xl flex flex-wrap justify-between mx-auto mt-5">
          <div className="p-3">
            <h1 className="text-lg text-darkBlack font-lexend font-semibold md:text-xl">
              About
            </h1>
            <div className="mt-3">
              {myData.footer[0].about.map((val, i) => (
                <p
                  key={i}
                  className="text-xs mt-3 cursor-pointer md:text-[14px] font-[400] font-roboto text-[#5E5E5E]"
                >
                  {val}
                </p>
              ))}
            </div>
          </div>
          <div className="p-3">
            <h1 className="text-lg text-darkBlack font-lexend font-semibold md:text-xl">
              MyFeedback
            </h1>
            <div className="mt-3">
              {myData.footer[1].myFeedback.map((val, i) => (
                <p
                  key={i}
                  className="text-xs mt-3 cursor-pointer md:text-[14px] font-[400] font-roboto text-[#5E5E5E]"
                >
                  {val}
                </p>
              ))}
            </div>
          </div>
          <div className="p-3">
            <h1 className="text-lg text-darkBlack font-lexend font-semibold md:text-xl">
            Languages
            </h1>
            <select name="" id="" className=" text-xs mt-3 cursor-pointer md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
              {myData.footer[1].langauges.map((val, i) => (
                <option key={i} className="cursor-pointer" value={val}>
                  {val}
                </option>
              ))}
            </select>
            <h1 className="text-lg mt-12 text-darkBlack font-lexend font-semibold md:text-xl">
                Countries
            </h1>
            <select name="" id="" className="mt-3 text-xs  cursor-pointer md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
              {myData.footer[1].Countries.map((val, i) => (
                <option key={i} className="cursor-pointer" value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-darkBlack font-semibold text-[14px] mt-20 text-center">Copyright @ Septembre 2023 myfeedback, designed by scott</p>
      </div>
    </>
  );
};
