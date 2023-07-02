import { MouseEventHandler } from "react"

export interface ButtonProps {
    title: string
    containerStyle?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
}