import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const AdviceIcon = ({ fill, props }) => {
  return (
    <SvgIcon
      width="96px"
      height="52px"
      viewBox="0 0 96 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 20H20V8H12V20H0V28H12V40H20V28H32V20ZM72 24C78.64 24 83.96 18.64 83.96 12C83.96 5.36 78.64 0 72 0C70.72 0 69.48 0.199999 68.36 0.559999C70.64 3.8 71.96 7.72 71.96 12C71.96 16.28 70.6 20.16 68.36 23.44C69.48 23.8 70.72 24 72 24ZM52 24C58.64 24 63.96 18.64 63.96 12C63.96 5.36 58.64 0 52 0C45.36 0 40 5.36 40 12C40 18.64 45.36 24 52 24ZM78.48 32.64C81.8 35.56 84 39.28 84 44V52H96V44C96 37.84 86.52 34.04 78.48 32.64ZM52 32C44 32 28 36 28 44V52H76V44C76 36 60 32 52 32Z"
        fill={fill}
      />
    </SvgIcon>
  );
};
export default AdviceIcon;
