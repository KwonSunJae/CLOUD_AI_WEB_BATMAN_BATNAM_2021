import React from "react";
import styled from "styled-components";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

const MainBlock = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CamWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const CamDiv = styled.div`
  width: 32.5%;
  height: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
`;

const CtrlBar = styled.div`
  height: 7%;
  border-top: 1px solid gray;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledSpan = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;

  font-weight: 500;
`;

const StyledBtn = styled.button`
  border: none;
  background: none;
  border-radius: 5rem;
  color: black;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: gray;
  }
  &:active {
    background: gray;
    color: white;
  }
  & + & {
    margin-left: 1.5rem;
  }
`;

const SizeCtrl = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;

  background: none;
  color: gray;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;

  -webkit-transition: font-size 0.5s ease;
  -moz-transition: font-size 0.5s ease;
  -o-transition: font-size 0.5s ease;
  transition: font-size 0.5s ease;

  &:hover {
    color: black;
    font-size: 1.85rem;
  }
`;

const label = [
  "SECTOR A",
  "SECTOR B",
  "SECTOR C",
  "SECTOR D",
  "SECTOR E",
  "SECTOR F",
];

const CamBlock = ({ isFull, onClick }) => {
  return (
    <MainBlock>
      <CamWrapper>
        {label.map((lb, idx) => (
          <CamDiv key={idx}>{lb}</CamDiv>
        ))}
      </CamWrapper>
      <CtrlBar>
        <StyledSpan>CAM : 활주로 1</StyledSpan>
        <StyledBtn>
          <MdNavigateBefore />
        </StyledBtn>
        <StyledBtn>
          <MdNavigateNext />
        </StyledBtn>
        <SizeCtrl onClick={onClick}>
          {isFull ? <BsFullscreenExit /> : <BsFullscreen />}
        </SizeCtrl>
      </CtrlBar>
    </MainBlock>
  );
};

export default CamBlock;
