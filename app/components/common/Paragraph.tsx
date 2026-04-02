import React from "react";
interface paragraphProps {
  children: React.ReactNode;
  className ?:string;
}
const Paragraph = ({ children, className }: paragraphProps) => {
  return (
    <p
      className={`text-base font-normal leading-[160%] text-[#4D4D4D] ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
