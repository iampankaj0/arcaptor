import React from "react";
import "../../assets/styles/button.scss";

const Button = ({ type, onClick, title, className, icon }) => {
  return (
    <div className="main__button_class">
      <button type={type} onClick={onClick} className={className}>
        {icon && <span>{icon}</span>}

        <span style={{ width: icon ? "auto" : "100%" }}>{title}</span>
      </button>
    </div>
  );
};

export default Button;
