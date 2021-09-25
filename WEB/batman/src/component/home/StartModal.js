import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ModalBox from "../common/ModalBox";
import RunWayList from "./RunWayList";
import DtPicker from "../common/Input/DtPicker";

const FormWrapper = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 40vh;
`;

const BtnGroup = ({ onClose }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={onClose}>
        시작하기
      </Button>
      <Button variant="outlined" onClick={onClose}>
        취소
      </Button>
    </Stack>
  );
};

const StartForm = ({ onClose }) => {
  return (
    <FormWrapper>
      <span style={{ fontWeight: "bold", fontSize: "2rem" }}>BATMAN</span>
      <RunWayList />
      <DtPicker label={"시작 시각"} />
      <DtPicker label={"종료 시각"} />
      <FormControlLabel control={<Checkbox />} label="현재 시간" />
      <BtnGroup onClose={onClose} />
    </FormWrapper>
  );
};

const StartModal = ({ open, onClose }) => {
  return (
    <ModalBox open={open} onClose={onClose}>
      <StartForm onClose={onClose} />
    </ModalBox>
  );
};

export default StartModal;
