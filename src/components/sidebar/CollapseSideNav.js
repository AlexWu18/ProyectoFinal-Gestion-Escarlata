import React from "react";
import Button from "@mui/material/Button";

const CollapseSideNav = ({ onClose, close, title }) => {
  const handleClick = (e) => {
    onClose(!close);
  };

  return (
    <Button
      // startIcon={close ? <ArrowRightIcon /> : <ArrowLeftIcon />}
      onClick={handleClick}
      size="large"
      sx={{ textDecoration: "none", textTransform: "inherit" }}
    >
      {title}
    </Button>
  );
};

export default CollapseSideNav;
