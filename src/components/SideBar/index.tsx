import React from "react";
import "./index.css";
interface TabProps {
    // Define the expected types for the component props
    // You can add or modify these based on your actual prop requirements
    className?: string;
    divClassName? : string;
    text? : string;
  }
export const TabItem : React.FC<TabProps>= ({ className , divClassName, text = "Home" }) => {
  return (
  
    
      <a href='google.com' className={`home`}>{text}</a>
  
  );
};

