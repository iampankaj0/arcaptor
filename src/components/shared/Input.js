import React from "react";
import "../../assets/styles/input.scss";

const Input = ({ icon, placeholder, type, onChange, className }) => {
  return (
    <div className="input_main">
      <span>{icon}</span>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Input;
