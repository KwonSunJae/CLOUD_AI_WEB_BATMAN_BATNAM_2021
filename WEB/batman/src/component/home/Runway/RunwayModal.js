import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ModalBox from "../../common/ModalBox";
import TextInput from "../../common/Input/TextInput";
import RunwayGraphic from "./RunwayGraphic";

import TestPage from "../../../pages/test";

const FormWrapper = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
`;

const InputsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const TitleInputWrapper = styled.div`
  flex: 1;
  padding: 1rem;
`;

const AngleInputWrapper = styled.div`
  width: 20%;
  padding: 1rem;
`;

const BtnGroup = ({ onClose }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={onClose}>
        생성하기
      </Button>
      <Button variant="outlined" onClick={onClose}>
        취소
      </Button>
    </Stack>
  );
};

const InputGroup = ({ form, onChange }) => {
  return (
    <InputsWrapper>
      <TitleInputWrapper>
        <TextInput
          label="활주로 이름"
          value={form.name}
          name="name"
          onChange={onChange}
          fullWidth
        />
      </TitleInputWrapper>
      <AngleInputWrapper>
        <TextInput
          label="시작방위"
          value={form.angle_start}
          name="angle_start"
          onChange={onChange}
          isNumber
        />
      </AngleInputWrapper>
      <AngleInputWrapper>
        <TextInput
          label="끝방위"
          value={form.angle_end}
          name="angle_end"
          onChange={onChange}
          isNumber
        />
      </AngleInputWrapper>
    </InputsWrapper>
  );
};

const StartForm = ({ onClose, form, onChange }) => {
  const graphicForm = {
    name: form.name,
    angles: [form.angle_start, form.angle_end],
    sectors: form.sectors,
  };
  return (
    <FormWrapper>
      <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
        BATMAN : 활주로 생성
      </span>
      <InputGroup form={form} onChange={onChange} />
      <RunwayGraphic form={graphicForm} />
      <BtnGroup onClose={onClose} />
    </FormWrapper>
  );
};

const RunwayModal = ({ open, onClose, form, onChange }) => {
  return (
    <ModalBox open={open} onClose={onClose} width={"60vw"}>
      {/* <StartForm onClose={onClose} form={form} onChange={onChange} /> */}
      <TestPage />
    </ModalBox>
  );
};

export default RunwayModal;
