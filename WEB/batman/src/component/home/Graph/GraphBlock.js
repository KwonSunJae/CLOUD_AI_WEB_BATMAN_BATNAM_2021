import styled from "styled-components";

import LineChart from "../../common/LineChart";

const GraphBlockWrapper = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: bolder;
`;

const GraphBlock = () => {
  return (
    <GraphBlockWrapper>
      <Wrapper>
        <LineChart />
      </Wrapper>
    </GraphBlockWrapper>
  );
};

export default GraphBlock;
