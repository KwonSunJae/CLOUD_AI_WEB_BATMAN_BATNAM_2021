import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ModalBox from "../../common/ModalBox";
import RunwayList from "../../home/Runway/RunwayList";
import DtPicker from "../../common/Input/DtPicker";

import { useDispatch, useSelector } from "react-redux";
import { changeAttr } from "../../../module/start_property";

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

const RunwayListCntr = ({ runwayForm }) => {
  console.log(runwayForm);
  const { value, handleChange, list } = runwayForm;
  return <RunwayList value={value} handleChange={handleChange} list={list} />;
};

const StartForm = ({ onClose, runwayForm }) => {
  return (
    <FormWrapper>
      <span style={{ fontWeight: "bold", fontSize: "2rem" }}>BATMAN</span>
      <RunwayListCntr runwayForm={runwayForm} />
      <DtPicker label={"시작 시각"} />
      <DtPicker label={"종료 시각"} />
      <FormControlLabel control={<Checkbox />} label="현재 시간" />
      <BtnGroup onClose={onClose} />
    </FormWrapper>
  );
};

const StartModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => ({
    form: state.start_property,
  }));

  const handleChange = (e) => {
    dispatch(changeAttr({ name: e.target.name, value: e.target.value }));
  };

  const runwayForm = {
    value: form.form.runwaySelected,
    handleChange,
    list: form.form.runwayList,
  };

  return (
    <ModalBox open={open} onClose={onClose}>
      <StartForm onClose={onClose} runwayForm={runwayForm} />
    </ModalBox>
  );
};

export default StartModal;
