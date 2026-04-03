import type { ReactElement } from "react";
import React from "react";

interface LoginCardProps {
  icon: string;
  className?: string;
  fill?: string;
  iconClass?: string;
  pathClassName?: string;
  onclick?: () => void;
}

const Icons: React.FC<LoginCardProps> = ({
  icon,
  className,
  onclick,
  pathClassName,
}) => {
  const iconList = {
    openNav: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
    ),
    closeNav: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
          fill="currentColor"
        />

      </svg>
    ),
    topCommaa: (
      <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.68 0C24.2133 0 24.48 0.266668 24.48 0.800003V5.12C24.48 5.65334 24.2133 5.92 23.68 5.92H21.408C20.7893 5.92 20.48 6.18667 20.48 6.72V7.648H24.416C24.9493 7.648 25.216 7.91467 25.216 8.448L25.152 16.256C25.152 16.7893 24.8853 17.056 24.352 17.056H14.656C14.1227 17.056 13.856 16.7893 13.856 16.256V6.848C13.856 4.544 14.4 2.82667 15.488 1.696C16.576 0.565334 18.0267 0 19.84 0H23.68ZM9.824 0C10.3573 0 10.624 0.266668 10.624 0.800003V5.12C10.624 5.65334 10.3573 5.92 9.824 5.92H7.552C6.93333 5.92 6.624 6.18667 6.624 6.72V7.648H10.56C11.0933 7.648 11.36 7.91467 11.36 8.448L11.296 16.256C11.296 16.7893 11.0293 17.056 10.496 17.056H0.8C0.266667 17.056 0 16.7893 0 16.256V6.848C0 4.544 0.544 2.82667 1.632 1.696C2.72 0.565334 4.17067 0 5.984 0H9.824Z" fill="#022C22" />
      </svg>
    ),
  };
  const addClassName = (
    icon: ReactElement<SVGElement>,
  ): ReactElement<SVGElement> => {
    return React.cloneElement(icon, {
      className: (className || "") + " custom-class",
    });
  };
  const iconsNew = Object.fromEntries(
    Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)]),
  );
  return iconsNew[icon] || null;
};

export default Icons;
