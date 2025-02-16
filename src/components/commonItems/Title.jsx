import { cn } from "@heroui/react"

export const HeadingOne = ({className, children}) => {
    return (
        <>
            <p className={cn("text-darkBlack font-extrabold text-xl md:text-2xl lg:text-3xl font-lexend", className)}>{children}</p>
        </>
    )
}
