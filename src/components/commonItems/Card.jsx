import { cn } from "@heroui/react"

export const Cards =({img, heading, text, stars, rating, review, className}) => {
    return (
        <>
            <div className={cn("bg-whiteGray rounded-[12px] w-72 font-roboto", className)}>
                <div >
                    <img src={img} className="w-full bg-cover" alt="" />
                </div>
                <div className="p-3">
                    <h1 className="text-normalBlack font-bold text-lg leading-[22.27px] md:text-[22px]">{heading}</h1>
                    <p className="text-[14px] text-darkGray mt-2 leading-[16.14px]">{text}</p>
                    <div className="flex items-center gap-2 mt-3">
                        <img src={stars} className="w-28" alt="" />
                        <p className="text-[15px] font-bold text-normalBlack">{rating}</p>
                        <p className="text-[15px] text-darkGray">{review}</p>
                    </div>
                </div>
            </div>
        </>
    )
}