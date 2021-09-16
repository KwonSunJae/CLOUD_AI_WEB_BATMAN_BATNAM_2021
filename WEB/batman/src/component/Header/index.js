import React from "react";
import styled from "styled-components";
import oc from "open-color";

const HeaderWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 6rem;
  margin-right: 6rem;
  height: 10%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 1rem;
  border-bottom: 1px solid ${oc.gray[6]};
`;

const StyledLogo = styled.div`
  border: none;
  font-size: 2rem;
  font-weight: bolder;
  letter-spacing: 0.2rem;
`;

const StyledNavBar = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;
`;

const UserCtrlWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
`;

const StyledButton = styled.button`
  font-size: 1rem;
  letter-spacing: 0.2rem;
  background: none;
  color: ${oc.gray[8]};
  border: none;
  padding-top: 0.5rem;
  padding-left: 6rem;
  padding-right: 6rem;

  -webkit-transition: font-size 0.5s ease;
  -moz-transition: font-size 0.5s ease;
  -o-transition: font-size 0.5s ease;
  transition: font-size 0.5s ease;

  &:hover {
    font-size: 1.5rem;
  }
  & + & {
    border-left: 1px solid black;
  }
`;

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <StyledLogo>BATMAN</StyledLogo>
        <StyledNavBar>
          <StyledButton>홈으로</StyledButton>
          <StyledButton>통계실</StyledButton>
          <StyledButton>상황실</StyledButton>
          <StyledButton>통제실</StyledButton>
        </StyledNavBar>
        <UserCtrlWrapper>사용자정보</UserCtrlWrapper>
      </HeaderWrapper>
    </div>
  );
};

export default Header;
