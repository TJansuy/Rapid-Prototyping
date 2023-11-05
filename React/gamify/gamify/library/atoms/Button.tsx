import "./Button.css";
import React from "react";

interface IButtonProps {
    children: any, 
    className?: string,
    onClick: Function | typeof React.useState,
    value: Function | number | string,
};

const Button = (props: IButtonProps) => {
    const clickHandler = () => {
        if (typeof props.value === 'function') {
            props.onClick(props.value());
        } else {
            props.onClick();
        }
    }

    return (
        <div 
            className={'Button' + (props.className ? ' ' + props.className : '')}
            onClick={clickHandler}
            >
            {props.children}
        </div>
    )
};

export default Button;