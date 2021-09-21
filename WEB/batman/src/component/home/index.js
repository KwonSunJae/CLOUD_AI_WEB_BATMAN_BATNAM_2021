import styled from "styled-components";

import CamBlock from "./CamBlock";
import RunWayBlock from "./RunWayBlock";
import SearchedList from "./SearchedList";
import GraphBlock from "./GraphBlock";

const MainTemplate = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`;
const CamWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RunWayWrapper = styled.div`
  height: 30%;
  width: 70%;
`;

const SideWrapper = styled.div`
  height: 99%;
  width: 30%;
  display: flex;
  flex-flow: column wrap;
`;

const SearchedWrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GraphWrapper = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const home = ({ isFull, onClick }) => {
  if (isFull) {
    return (
      <MainTemplate>
        <CamWrapper>
          <CamBlock isFull={isFull} onClick={onClick} />
        </CamWrapper>
      </MainTemplate>
    );
  } else {
    return (
      <MainTemplate>
        <CamWrapper>
          <CamBlock isFull={isFull} onClick={onClick} />
        </CamWrapper>
        <RunWayWrapper>
          <RunWayBlock />
        </RunWayWrapper>
        <SideWrapper>
          <SearchedWrapper>
            <SearchedList />
          </SearchedWrapper>
          <GraphWrapper>
            <GraphBlock />
          </GraphWrapper>
        </SideWrapper>
      </MainTemplate>
    );
  }
};

export default home;
