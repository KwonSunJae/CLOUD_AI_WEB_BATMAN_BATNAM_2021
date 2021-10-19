import styled from "styled-components";

import StartModal from "../home/Header/StartModal";

const HeaderWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  background: gray;
`;

const StyledLogo = styled.div`
  border: none;
  font-size: 2rem;
  font-weight: bolder;
  letter-spacing: 0.2rem;
  color: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StyledNavBar = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 400;
  background: none;
  color: white;
  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-transition: font-size 0.5s ease;
  -moz-transition: font-size 0.5s ease;
  -o-transition: font-size 0.5s ease;
  transition: font-size 0.5s ease;

  &:hover {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    background: black;
  }
  & + & {
    margin-top: 0.5rem;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <StyledLogo>BATMAN</StyledLogo>
        <StyledNavBar>
          <StyledButton>홈으로</StyledButton>
          <StyledButton>통계실</StyledButton>
          <StyledButton>상황실</StyledButton>
          <StyledButton>통제실</StyledButton>
        </StyledNavBar>
      </HeaderWrapper>
    </>
  );
};

export default Header;
