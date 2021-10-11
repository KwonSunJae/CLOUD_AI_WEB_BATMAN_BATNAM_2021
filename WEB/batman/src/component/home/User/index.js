import styled from "styled-components";
import { useSelector } from "react-redux";

import Login from "./Login";
import UserCtrl from "./UserCtrl";

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: #eee;
  position: relative;
`;

const User = () => {
  const { isLogin } = useSelector((state) => ({
    isLogin: state.login.isLogin,
  }));

  return <Wrapper>{isLogin ? <UserCtrl /> : <Login />}</Wrapper>;
};

export default User;
