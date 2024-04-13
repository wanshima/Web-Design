function Button({
    children,
    className = '', 
    disabled = false,
    onClick,
    type = "button",
    visual = "button",
  }) {
    let buttonClass = visual === "link" ? "button-link" : "button";
    
    return (
      <button
        className={`${buttonClass} ${className}`}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  export default Button;
  