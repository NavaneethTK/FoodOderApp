import React from "react";
function Button({ btnName, className, type, onClick }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {btnName}
    </button>
  );
}
export default Button;
