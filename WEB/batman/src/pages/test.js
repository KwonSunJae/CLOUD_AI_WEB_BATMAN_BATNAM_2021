import RunwayCreate from "../component/home/Runway/RunwayCreate";

import { useState } from "react";

const A = () => {
  return <h2>A</h2>;
};
const B = () => {
  return <h2>B</h2>;
};
const C = () => {
  return <h2>C</h2>;
};
const D = () => {
  return <h2>D</h2>;
};

const renderList = [A, B, C, D];
const steps = ["활주로 이름 및 방위 설정", "섹터 만들기", "위치 설정", "확인"];

const TestPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <RunwayCreate
      steps={steps}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      renderList={renderList}
    />
  );
};

export default TestPage;
