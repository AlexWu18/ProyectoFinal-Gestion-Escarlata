import React from "react";
import { TextField, IconButton, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockIcon from "@mui/icons-material/Lock";
import AvatarIcon from "./Icons/AvatarIcon";
const CssTextField = styled(TextField)({
  label: {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "primary.main",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D0D6E1",
      borderRadius: ".625rem",
    },
    "&:hover fieldset": {
      borderColor: "primary.main",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
    },
  },
});
const InputText = ({
  label,
  select,
  multiline,
  rows,
  icon,
  required,
  value,
  onChange,
  list,
  error,
  onFocus,
  onBlur,
  helperText,
  type,
  handleClickShowPassword,
  handleMouseDownPassword,
  values,
  setType,
  showPadlock,
  showAvatar,
  id,
}) => {
  return (
    <CssTextField
      fullWidth
      type={type}
      required={required}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      select={select}
      onFocus={onFocus}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      InputProps={{
        endAdornment:
          setType === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values ? (
                  <VisibilityOutlinedIcon sx={{ color: "#D0D6E1" }} />
                ) : (
                  <VisibilityOffOutlinedIcon sx={{ color: "#D0D6E1" }} />
                )}
              </IconButton>
            </InputAdornment>
          ) : (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        startAdornment:
          (showPadlock && (
            <InputAdornment position="start">
              <LockIcon sx={{ color: "#D0D6E1" }} />
            </InputAdornment>
          )) ||
          (showAvatar && (
            <InputAdornment position="start">
              <AvatarIcon sx={{ color: "#D0D6E1" }} />
            </InputAdornment>
          )),
      }}
    >
      {list?.data?.map((elemento) => (
        <MenuItem key={elemento.id} value={elemento.id}>
          {elemento.name}
        </MenuItem>
      ))}
    </CssTextField>
  );
};

export default InputText;
