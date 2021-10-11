import TextField from "@mui/material/TextField";

const TextInput = ({
  label,
  value,
  name,
  onChange,
  isNumber,
  type,
  fullWidth,
  mt,
}) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      value={value}
      name={name}
      onChange={onChange}
      fullWidth={fullWidth ? true : false}
      type={type ? type : isNumber ? "Number" : ""}
      sx={{ mt: mt }}
    />
  );
};

export default TextInput;
