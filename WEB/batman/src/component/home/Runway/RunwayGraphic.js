import styled from "styled-components";
import { IoArrowForwardCircle } from "react-icons/io5";
import HoverTooltips from "../../common/HoverTooltips";

const ArrowLine = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid gray;
  border-right: none;
  border-left: none;

  font-size: 3rem;
`;

const RunwayLabel = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const SectorLine = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const SectorBlock = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    background: gray;
    color: white;
    cursor: pointer;
  }

  border-radius: 2rem;
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const SectorItem = ({ label }) => {
  return (
    <HoverTooltips message={label + "'s Information!"}>
      <SectorBlock>{label}</SectorBlock>
    </HoverTooltips>
  );
};

const SectorBlockList = ({ list }) => {
  return (
    <SectorLine>
      {list.map((l, idx) => (
        <SectorItem key={idx} label={l} />
      ))}
    </SectorLine>
  );
};

const renderArrow = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(<IoArrowForwardCircle key={i} />);
  }
  return result;
};

const RunwayGraphic = ({ form }) => {
  console.log(form);
  const { name, angles, sectors } = form;
  const [angle_start, angle_end] = angles;
  const { top, bottom } = sectors;
  return (
    <>
      <SectorBlockList list={top.map((s) => s.name)} />
      <ArrowLine>
        <RunwayLabel>{angle_start}</RunwayLabel>
        {renderArrow(2)}
        <RunwayLabel>{name}</RunwayLabel>
        {renderArrow(2)}
        <RunwayLabel>{angle_end}</RunwayLabel>
      </ArrowLine>
      <SectorBlockList list={bottom.map((s) => s.name)} />
    </>
  );
};

export default RunwayGraphic;
