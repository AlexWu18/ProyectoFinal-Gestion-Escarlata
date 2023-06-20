import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const AdviceIcon = ({ level }) => {
  return (
    <SvgIcon
      style={{
        borderRadius: "15rem",
        padding: ".2rem",
        width: "1rem",
        height: "1rem",
        background: level.includes("Bajo")
          ? "#87AADF"
          : level.includes("Medio")
          ? "#E8AE57"
          : level.includes("Alto") || level.includes("Muy")
          ? "#E25C5C"
          : "#BA57E8",
      }}
      width="5"
      height="5"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.1423 4.28564L9.61666 8.57136H4.66794L7.1423 4.28564Z"
        fill="white"
      />
      <path d="M5.0007 0L7.47506 4.28571H2.52634L5.0007 0Z" fill="white" />
      <path
        d="M2.85714 4.28564L5.3315 8.57136H0.382785L2.85714 4.28564Z"
        fill="white"
      />
    </SvgIcon>
  );
};
export default AdviceIcon;
