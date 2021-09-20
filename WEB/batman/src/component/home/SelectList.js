import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 999;
  margin-top: 0.5rem;
`;

const SelectList = () => {
  const [line, setLine] = useState(-1);
  const handleChange = (event) => {
    setLine(event.target.value);
  };

  return (
    <Wrapper>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-line-label">RunWay</InputLabel>
        <Select
          labelId="line-name"
          id="line-item"
          value={line}
          onChange={handleChange}
          autoWidth
          label="RunWay"
        >
          <MenuItem value={-1}>
            <em>활주로</em>
          </MenuItem>
          <MenuItem value={1}>활주로 1</MenuItem>
          <MenuItem value={2}>활주로 2</MenuItem>
          <MenuItem value={3}>활주로 3</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default SelectList;
