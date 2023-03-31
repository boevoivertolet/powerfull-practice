import React, {MouseEvent} from 'react';
import c from "./Button.module.css"

const MyButton: React.FC<MyButtonProps> = ({children, ...restProps}) => {
    // const {children, ...restProps} = props

    return (
        <button {...restProps} className = {c.myBtn}>{children}</button>
    );
};
type MyButtonProps = {
    children?: React.ReactNode
    disabled?: boolean
    onClick: (e: MouseEvent<HTMLElement>) => void
}

export default MyButton;
