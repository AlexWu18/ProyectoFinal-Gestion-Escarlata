import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const UserListIcon = ({ fill, props }) => {
  return (
    <SvgIcon
      idth="72"
      height="80"
      viewBox="0 0 72 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 8H60V0H52V8H20V0H12V8H8C3.56 8 0 11.6 0 16V72C0 76.4 3.56 80 8 80H64C68.4 80 72 76.4 72 72V16C72 11.6 68.4 8 64 8ZM36 20C42.64 20 48 25.36 48 32C48 38.64 42.64 44 36 44C29.36 44 24 38.64 24 32C24 25.36 29.36 20 36 20ZM60 68H12V64C12 56 28 51.6 36 51.6C44 51.6 60 56 60 64V68Z"
        fill={fill}
      />
    </SvgIcon>
  );
};
export default UserListIcon;
