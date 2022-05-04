export interface IButton {
  className?: string;
  onClick?: VoidFunction;
  children: JSX.Element | JSX.Element[] | string | string[];
  ref?: any;
}

const Button = ({ className, ref, onClick, children }: IButton) => {
  return (
    <button className={className} ref={ref} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
