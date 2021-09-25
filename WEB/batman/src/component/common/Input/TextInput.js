import TextField from "@mui/material/TextField";

const TextInput = ({ label, value, name, onChange, isNumber, fullWidth }) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      value={value}
      name={name}
      onChange={onChange}
      type={isNumber ? "Number" : ""}
      fullWidth={fullWidth ? true : false}
    />
  );
};

export default TextInput;
