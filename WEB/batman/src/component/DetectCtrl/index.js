import React from "react";
import styled from "styled-components";
import oc from "open-color";

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

const StyledButton = styled.button`
  background: gray;
  border: none;
  border-radius: 0.5rem;

  color: white;
  font-size: 1.3rem;
  font-weight: bold;

  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    background: ${oc.cyan[4]};
    color: white;
  }

  & + & {
    margin-left: 2rem;
  }
`;

const DetectCtrl = () => {
  return (
    <ButtonWrapper>
      <StyledButton>Detect</StyledButton>
      <StyledButton>Stop</StyledButton>
    </ButtonWrapper>
  );
};

export default DetectCtrl;
