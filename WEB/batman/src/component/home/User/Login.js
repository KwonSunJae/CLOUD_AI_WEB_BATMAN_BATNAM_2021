import { useState, useEffect } from "react";
import styled from "styled-components";
import { GrLogin } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";

import { tryLogIn, checkLogin } from "../../../module/login";

import TextInput from "../../common/Input/TextInput";
import Button from "@mui/material/Button";

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  font-weight: bolder;
`;

const StyledForm = styled.form`
  width: 80%;
`;

const StyledInput = styled(TextInput)`
  & + & {
    margin-top: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const ErrMsg = styled.div`
  font-size: 1.25rem;
  color: red;
  text-align: center;
`;

const Login = () => {
  const [form, setForm] = useState({
    id: "",
    pw: "",
  });
  const dispatch = useDispatch();

  const { error } = useSelector((state) => ({
    error: state.login.error,
  }));

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(tryLogIn(form));
  };

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <>
      <TitleWrapper>
        {"LOGIN"}
        <GrLogin />
      </TitleWrapper>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          label="아이디"
          value={form.id}
          name="id"
          onChange={onChange}
          fullWidth
        />
        <StyledInput
          mt={"0.5rem"}
          label="비밀번호"
          value={form.pw}
          name="pw"
          onChange={onChange}
          type="password"
          fullWidth
        />
        {error && <ErrMsg>{error}</ErrMsg>}
        <StyledButton
          sx={{ mt: "0.5rem" }}
          variant="contained"
          onClick={onSubmit}
        >
          로그인
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default Login;
