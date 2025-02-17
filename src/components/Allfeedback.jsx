import myData from "../dataBase/Data.json";
export const Feedback = () => {
  return (
    <div>
      {myData.FeedbackCard.map(
        (
          {
            name,
            location,
            stars,
            date,
            text,
          },
          i
        ) => (
          <div key={i} className="mt-6">
            <div className="bg-whiteGray flex items-start py-3 gap-5 rounded-lg px-4 mx-auto w-[96%] md:max-w-[90%]">
              <div className="w-10">
                <div className=" bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <img
                    src="/homePageImage/icons/user.png"
                    className="w-5"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div>
                  <h3 className="text-[15px] font-semibold text-normalBlack">
                    {name}
                  </h3>
                  <p className="text-xs  md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                    {location}
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <p>
                    <img src={stars} alt="" />
                  </p>
                  <p className="text-xs  md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                    {date}
                  </p>
                </div>
                <p className="text-xs mt-3 md:text-[14px] font-[400] font-roboto text-[#5E5E5E]">
                  {text}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
