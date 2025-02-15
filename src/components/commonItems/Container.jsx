import { cn } from "../../setTwMarge/script"

export const Contain = ({children, className}) => {
    return (
        <>
            <div className={cn("mx-auto w-full md:max-w-[1440px]", className)}>
                {children}
            </div>
        </>
    )
}