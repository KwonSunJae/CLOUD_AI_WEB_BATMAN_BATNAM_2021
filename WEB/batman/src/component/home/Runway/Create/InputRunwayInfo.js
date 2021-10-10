import styled from "styled-components";

import TextInput from "../../../common/Input/TextInput";

const form = {
  name: "",
  angle_start: null,
  angle_end: null,
};

const onChange = () => {};

const InputA = () => {
  return (
    <div>
      <TextInput
        label="활주로 이름"
        value={form.name}
        name="name"
        onChange={onChange}
      />
      <TextInput
        label="시작방위"
        value={form.angle_start}
        name="angle_start"
        onChange={onChange}
        isNumber
      />
      <TextInput
        label="끝방위"
        value={form.angle_end}
        name="angle_end"
        onChange={onChange}
        isNumber
      />
    </div>
  );
};

export default InputA;
