import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import PageTemplate from "../container/common/PageTemplate.cntr";
import Cam from "../container/home/Cam";
import Runway from "../container/home/Runway";
import LogList from "../container/home/Log";
import User from "../component/home/User";
import SideWrapper from "../component/home/SideWrapper";

import * as data from "../public/data";

const HomePage = ({ history }) => {
  const { isFull,isLogin } = useSelector((state) => ({
    isFull: state.fullscreen.isFull,
    isLogin:state.login.isLogin
  }));

  useEffect(()=>{
    if(!isLogin)
    history.push("/login");
  },[isLogin,history])

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
export default withRouter(HomePage);
