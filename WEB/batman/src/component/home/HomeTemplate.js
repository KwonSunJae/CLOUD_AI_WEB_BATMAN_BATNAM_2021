import React from "react";
import styled, { css } from "styled-components";
import oc from "open-color";

const white2 = oc.white[2];
const gray4 = oc.gray[4];
const gray6 = oc.gray[6];

const MainTemplate = styled.div`
  flex: 1;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  background: ${white2};
`;

const DividedBlock = styled.div`
  background: ${gray4};
  color: black;
  font-weight: bolder;
  font-size: 2rem;
  text-align: center;

  ${(props) =>
    props.isFull &&
    css`
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    `}
`;

const ToggleBtn = styled.button`
  background: white;
  color: black;
  border: none;
  & + & {
    margin-left: 0.5rem;
  }
  &:hover {
    background: black;
    color: white;
  }
`;

const title = ["활주로", "LIVE CAM", "최근발견리스트", "통계"];

const HomeTemplate = ({ fullSize, onClick }) => {
  console.log(onClick);
  const { onUpSize, onDownSize } = onClick;
  return (
    <MainTemplate>
      {fullSize !== -1 &&
        title.map((t, idx) => {
          if (idx == fullSize)
            return (
              <DividedBlock isFull>
                {t}
                <ToggleBtn onClick={() => onUpSize(idx)}>+</ToggleBtn>
                <ToggleBtn onClick={() => onDownSize(idx)}>-</ToggleBtn>
              </DividedBlock>
            );
        })}
      {fullSize === -1 &&
        title.map((t, idx) => {
          return (
            <DividedBlock>
              {t}
              <ToggleBtn onClick={() => onUpSize(idx)}>+</ToggleBtn>
              <ToggleBtn onClick={() => onDownSize(idx)}>-</ToggleBtn>
            </DividedBlock>
          );
        })}
    </MainTemplate>
  );
};

export default HomeTemplate;
// TODO
// 메인 템플릿 화면 분할 한뒤에
// 전체화면으로 토글로 끄고 키고
// 템플릿 페이지 만들기
