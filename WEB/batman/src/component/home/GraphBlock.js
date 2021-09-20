import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: bolder;

  background: gray;
`;

const GraphBlock = () => {
  return (
    <Wrapper>
      <span>GRAPH BLOCK</span>
    </Wrapper>
  );
};

export default GraphBlock;
