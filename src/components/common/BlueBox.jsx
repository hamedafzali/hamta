import React from "react";
const BlueBox = ({ children, text, ...rest }) => {
  return (
    <div className="BlueBoxItem">
      <div className="BlueBox" {...rest}>
        {children}
      </div>
      <p>{text}</p>
    </div>
  );
};
export default BlueBox;
