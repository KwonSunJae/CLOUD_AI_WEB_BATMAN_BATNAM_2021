import React, { useState } from "react";
import styled from "styled-components";
import { IoArrowForwardCircle } from "react-icons/io5";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import HoverTooltips from "../common/HoverTooltips";
import RunWayList from "./RunWayList";
import RunWayModal from "./RunWayModal";

const MainBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const SiderWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const RunWayWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const ArrowLine = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  font-size: 3rem;
  border: 1px solid gray;
  border-right: none;
  border-left: none;
`;

const RunWayLabel = styled.div`
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
  border-radius: 2rem;
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  &:hover {
    background: gray;
    color: white;
    cursor: pointer;
  }
`;

/* 
SECTOR COMPONENT
N cam
M 폭음탄
최근 발견
*/

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

const BtnGroup = ({ onClose }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={onClose}>
        새 활주로 생성하기
      </Button>
      <Button variant="outlined" onClick={onClose}>
        취소
      </Button>
    </Stack>
  );
};

const RunWayBlock = () => {
  const renderArrow = (n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(<IoArrowForwardCircle key={i} />);
    }
    return result;
  };

  const SectorTop = ["A", "B", "C"];
  const SectorBottom = ["D", "E", "F"];

  const [open, setOpen] = useState(false);

  return (
    <MainBlock>
      <SiderWrapper>
        <RunWayList />
        <Button variant="outlined" onClick={() => setOpen(true)}>
          새 활주로 생성하기
        </Button>
        <RunWayModal open={open} onClose={() => setOpen(false)} />
      </SiderWrapper>
      <RunWayWrapper>
        <SectorBlockList list={SectorTop.map((s) => "SECTOR " + s)} />
        <ArrowLine>
          {renderArrow(2)}
          <RunWayLabel>활주로 1</RunWayLabel>
          {renderArrow(2)}
        </ArrowLine>
        <SectorBlockList list={SectorBottom.map((s) => "SECTOR " + s)} />
      </RunWayWrapper>
    </MainBlock>
  );
};

export default RunWayBlock;
