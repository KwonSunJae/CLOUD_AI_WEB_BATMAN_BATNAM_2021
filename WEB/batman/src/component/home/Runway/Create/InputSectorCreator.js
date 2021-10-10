import styled from "styled-components";

import TextInput from "../../../common/Input/TextInput";

const form = {
  name: "sector name",
  bomb: "bomb number",
  soundbomb: "soundbomb configure",
  cam_address: "cam_address",
};

const InputSectorCreator = () => {
  return (
    <div>
      <TextInput label="섹터 이름" />
      <TextInput label="폭음기" />
      <TextInput label="음향퇴치기" />
      <TextInput label="IP CAM 연결" />
    </div>
  );
};

export default InputSectorCreator;
