import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  label: string;
};

const Button = ({ type, label }: ButtonProps) => {
  return (
    <button type={type} className="red-button">
      {label}
    </button>
  );
};

export default Button;
