import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const DownloadIcon = ({ fill, props }) => {
  return (
    <SvgIcon
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7923 9.375H15.6257V3.125H9.37565V9.375H5.20898L12.5007 16.6667L19.7923 9.375ZM5.20898 18.75V20.8333H19.7923V18.75H5.20898Z"
        fill={fill}
      />
    </SvgIcon>
  );
};
export default DownloadIcon;
