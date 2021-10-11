import styled from "styled-components";
import Button from "@mui/material/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { RiZzzFill } from "react-icons/ri";
import { HiLogout } from "react-icons/hi";

import { useSelector,useDispatch } from "react-redux";
import { tryLogOut } from "../../../module/login";

const UserInfoWrapper = styled.div`
  height: 20%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: auto;
  margin-top: 1rem;
`;

const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  margin-right: 1rem;
`;

const UserInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
`;

const MainWrapper = styled.div`
  flex: 1;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStack = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 25%;
  font-weight: bold;
`;

const LogOutButton = styled.div`
  font-size: 1rem;
  color: black;

  border: 1px solid black;
  border-radius: 1rem;

  padding: 0.5rem;

  margin-left: 2rem;

  -webkit-transition: font-size 0.2s ease;
  -moz-transition: font-size 0.2s ease;
  -o-transition: font-size 0.2s ease;
  transition: font-size 0.2s ease;
  &:hover {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const UserCtrl = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state=>({
    user:state.login.user
  }));

  const onLogout = () => {
    dispatch(tryLogOut());
  }

  return (
    <>
      <UserInfoWrapper>
        <UserImage>
          <FaRegUserCircle />
        </UserImage>
        <UserInfo>
          <span>Username</span>
          <span>RunwayInfo</span>
        </UserInfo>
        <LogOutButton onClick={onLogout}>
          <HiLogout />
        </LogOutButton>
      </UserInfoWrapper>
      <MainWrapper>
        <RiZzzFill />
      </MainWrapper>
      <ButtonStack>
        <StyledButton variant="contained">시작하기</StyledButton>
        <StyledButton variant="contained" color="error">
          긴급호출
        </StyledButton>
        <StyledButton variant="contained">종료하기</StyledButton>
      </ButtonStack>
    </>
  );
};

export default UserCtrl;
