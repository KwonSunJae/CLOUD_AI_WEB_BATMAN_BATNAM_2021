import React from "react";

import PageTemplate from "../container/common/PageTemplate.cntr";

import CamBlock from "../component/home/Cam/CamBlock";
import Runway from "../container/home/Runway";
import SearchedList from "../component/home/Log/SearchedList";
import GraphBlock from "../component/home/Graph/GraphBlock";
import SideWrapper from "../component/home/SideWrapper";

const home = () => {
  return (
    <PageTemplate>
      <CamBlock />
      <Runway />
      <SideWrapper>
        <SearchedList />
        <GraphBlock />
      </SideWrapper>
    </PageTemplate>
  );
};

// Have to Set Fullsize module
// 여기 컴포넌트들을 모두 컨테이너로 바꾸기
export default home;
