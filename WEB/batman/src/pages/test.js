import RunwayCreate from "../component/home/Runway/Create/RunwayCreate";

import { useState } from "react";

import InputRunwayInfo from "../component/home/Runway/Create/InputRunwayInfo";
import InputSectorCreator from "../component/home/Runway/Create/InputSectorCreator";
import InputSectorPosition from "../component/home/Runway/Create/InputSectorPosition";
const D = () => {
  return <h2>D</h2>;
};

const renderList = [
  InputRunwayInfo,
  InputSectorCreator,
  InputSectorPosition,
  D,
];
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
