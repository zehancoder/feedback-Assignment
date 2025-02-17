import { cn } from "@heroui/react"

export const HeadingOne = ({className, children}) => {
    return (
        <>
            <p className={cn("text-darkBlack font-extrabold text-xl md:text-2xl lg:text-3xl font-lexend", className)}>{children}</p>
        </>
    )
}

export const HeadingTwo = ({className, children}) => {
    return (
        <>
            <h1 className={cn("text-xl font-semibold font-lexend md:text-2xl lg:text-3xl text-darkBlack", className)}>{children}</h1>
        </>
    )
}