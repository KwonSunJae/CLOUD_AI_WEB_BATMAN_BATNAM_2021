import { useState } from "react";

import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ModalBox from "../common/ModalBox";
import TextInput from "../common/Input/TextInput";

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
          value={form.runway}
          name="runway"
          onChange={onChange}
          fullWidth
        />
      </TitleInputWrapper>
      <AngleInputWrapper>
        <TextInput
          label="방위1"
          value={form.angle1}
          name="angle1"
          onChange={onChange}
          isNumber
        />
      </AngleInputWrapper>
      <AngleInputWrapper>
        <TextInput
          label="방위2"
          value={form.angle2}
          name="angle2"
          onChange={onChange}
          isNumber
        />
      </AngleInputWrapper>
    </InputsWrapper>
  );
};

const StartForm = ({ onClose }) => {
  const [form, setForm] = useState({
    runway: String,
    angle1: Number,
    angle2: Number,
  });
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormWrapper>
      <span style={{ fontWeight: "bold", fontSize: "2rem" }}>BATMAN</span>
      <InputGroup form={form} onChange={onChange} />
      <BtnGroup onClose={onClose} />
    </FormWrapper>
  );
};

const StartModal = ({ open, onClose }) => {
  return (
    <ModalBox open={open} onClose={onClose} width={"60vw"}>
      <StartForm onClose={onClose} />
    </ModalBox>
  );
};

export default StartModal;
