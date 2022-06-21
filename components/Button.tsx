import React from "react";

export interface IButton {
  className?: string;
  onClick?: VoidFunction;
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  ({ className, onClick, children }, ref?) => {
    return (
      <button className={className} ref={ref} onClick={onClick}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
