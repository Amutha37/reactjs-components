import React from "react";

// Button component
const Button = ({ show,handleCardShow,id}) => {
  return (
   
      <div className="circle_big">
      <div className="circle_middle">
        <button   onClick={handleCardShow } className="circle_small"  value={id}
        type="submit">
        {show ? "-" : "+" }  
        </button>
      </div>
    </div>
  );
};
export default Button;