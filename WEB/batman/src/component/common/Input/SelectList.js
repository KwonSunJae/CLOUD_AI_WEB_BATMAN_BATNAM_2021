import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 999;
  margin-top: 0.5rem;
`;

const SelectList = ({ width, label, value, setValue, list }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const minWidth = width ? width : 120;

  return (
    <Wrapper>
      <FormControl sx={{ m: 1, minWidth: { minWidth } }}>
        <InputLabel id="select-line-label">{label}</InputLabel>
        <Select
          labelId="line-name"
          id="line-item"
          value={value}
          onChange={handleChange}
          autoWidth
          label={label}
        >
          {list.map((l, idx) => (
            <MenuItem key={idx} value={l.value}>
              {l.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default SelectList;
