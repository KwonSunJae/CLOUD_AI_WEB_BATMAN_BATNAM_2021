import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import PageTemplate from "../component/login/PageTemplate";
import Login from "../component/home/User/Login";

const LoginPage = ({ history }) => {
  const { isLogin } = useSelector((state) => ({
    isLogin: state.login.isLogin,
  }));

  useEffect(() => {
    if (isLogin) history.push("/");
  }, [isLogin, history]);

  return (
    <PageTemplate>
      <Login />
    </PageTemplate>
  );
};

export default withRouter(LoginPage);
