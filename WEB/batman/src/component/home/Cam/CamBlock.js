import React from "react";
import styled, { css } from "styled-components";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

const CamBlockWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  ${(props) => {
    switch (props.listSize) {
      case 1:
        return css`
          width: 99%;
          height: 99%;
        `;
      case 2:
        return css`
          width: 49%;
          height: 99%;
        `;
      case 3:
        return css`
          width: 49%;
          height: 49%;
        `;
      case 4:
        return css`
          width: 49%;
          height: 49%;
        `;
      case 5:
        return css`
          width: 33%;
          height: 49%;
        `;
      default:
        return css`
          width: 33%;
          height: 49%;
        `;
    }
  }}
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
  color: #ddd;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-left: 1.5rem;
  }

  -webkit-transition: font-size 0.2s ease;
  -moz-transition: font-size 0.2s ease;
  -o-transition: font-size 0.2s ease;
  transition: font-size 0.2s ease;

  ${(props) =>
    !props.disabled &&
    css`
      color: black;
      &:hover {
        background: #ddd;
        font-size: 1.75rem;
      }
      &:active {
        background: gray;
        color: white;
      }
    `}
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
  outline: none;
  font-size: 1.5rem;
  font-weight: 500;

  -webkit-transition: font-size 0.2s ease;
  -moz-transition: font-size 0.2s ease;
  -o-transition: font-size 0.2s ease;
  transition: font-size 0.2s ease;

  &:hover {
    color: black;
    font-size: 1.85rem;
  }
`;

const CamBlock = ({ isFull, onClick, runway, page, onPageClick }) => {
  const { name, sectors } = runway;
  const { top, bottom } = sectors;
  const list = top.concat(bottom);
  const lastPage = Math.floor((list.length - 1) / 6);
  return (
    <CamBlockWrapper>
      <MainBlock>
        <CamWrapper>
          {list.slice(page * 6, page * 6 + 6).map((l, idx) => (
            <CamDiv listSize={list.length - page * 6} key={idx}>
              {l.name}
            </CamDiv>
          ))}
        </CamWrapper>
        <CtrlBar>
          <StyledSpan>
            {name === "활주로 선택" ? "활주로를 선택하세요" : "CAM : " + name}
          </StyledSpan>
          <StyledBtn disabled={page === 0} onClick={() => onPageClick(-1)}>
            <MdNavigateBefore />
          </StyledBtn>
          <StyledBtn
            disabled={lastPage <= 0 || page === lastPage}
            onClick={() => onPageClick(1)}
          >
            <MdNavigateNext />
          </StyledBtn>
          <SizeCtrl onClick={onClick}>
            {isFull ? <BsFullscreenExit /> : <BsFullscreen />}
          </SizeCtrl>
        </CtrlBar>
      </MainBlock>
    </CamBlockWrapper>
  );
};

export default CamBlock;
