const Button = ({onClick, children, leftIcon, rightIcon}) => (
    <button className="counter__button" onClick={onClick}>
        {leftIcon} {children} {rightIcon}
    </button>
);

export default Button;