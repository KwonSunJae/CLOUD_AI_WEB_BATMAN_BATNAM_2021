import React from "react";
import { useSelector } from "react-redux";
import PageTemplate from "../container/common/PageTemplate.cntr";

import Cam from "../container/home/Cam";
import Runway from "../container/home/Runway";
import LogList from "../container/home/Log";
import User from "../component/home/User";
import SideWrapper from "../component/home/SideWrapper";

import * as data from "../public/data";

const Home = () => {
  const { isFull } = useSelector((state) => ({
    isFull: state.fullscreen.isFull,
  }));
  return (
    <PageTemplate>
      {isFull && (
        <>
          <Cam />
        </>
      )}
      {!isFull && (
        <>
          <Cam />
          <Runway />
          <SideWrapper>
            <LogList />
            <User />
          </SideWrapper>
        </>
      )}
    </PageTemplate>
  );
};

// TODO
// 전체화면 동작하게 하기

// Have to Set Fullsize module
// 여기 컴포넌트들을 모두 컨테이너로 바꾸기
export default Home;
