import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ddd;
`;

const LoginWrapper = styled.div`
  width: 30%;
  height: 40%;
  background: white;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const PageTemplate = ({ children }) => {
  return (
    <Wrapper>
      <LoginWrapper>{children}</LoginWrapper>
    </Wrapper>
  );
};

export default PageTemplate;
