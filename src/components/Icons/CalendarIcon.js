import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const CalendarIcon = ({ fill }) => {
  return (
    <SvgIcon
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 1.75H11.6667V0.583298C11.6667 0.261368 11.4053 0 11.0833 0H10.5C10.178 0 9.9167 0.261368 9.9167 0.583298V1.75H4.0833V0.583298C4.0833 0.261368 3.82204 0 3.5 0H2.9167C2.59467 0 2.3333 0.261368 2.3333 0.583298V1.75H1.75C0.785172 1.75 0 2.53517 0 3.5V12.25C0 13.2148 0.785172 14 1.75 14H12.25C13.2148 14 14 13.2148 14 12.25V3.5C14 2.53517 13.2148 1.75 12.25 1.75ZM12.8333 12.25C12.8333 12.5714 12.5714 12.8333 12.25 12.8333H1.75C1.4286 12.8333 1.1667 12.5714 1.1667 12.25V5.85669H12.8333V12.25Z"
        fill={fill}
      />
    </SvgIcon>
  );
};
export default CalendarIcon;
