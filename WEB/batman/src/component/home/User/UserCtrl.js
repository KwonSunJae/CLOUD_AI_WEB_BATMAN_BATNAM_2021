import { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiZzzFill } from 'react-icons/ri';
import { HiLogout } from 'react-icons/hi';
import { FaCircle } from 'react-icons/fa';

import { tryLogOut } from '../../../module/login';
import StartModal from '../../../component/home/Header/StartModal';

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
	const [open, setOpen] = useState(false);

	const { user, curr, isDetect } = useSelector((state) => ({
		user: state.login.user,
		curr: state.runway.curr,
		isDetect: state.detect.isDetect,
	}));
	// curr or detect

	const onLogout = () => {
		dispatch(tryLogOut());
	};

	console.log(curr);

	return (
		<>
			<UserInfoWrapper>
				<UserImage>
					<FaRegUserCircle />
				</UserImage>
				<UserInfo>
					<span>{user}</span>
					<span>
						{isDetect ? (
							<>
								<FaCircle color="green" />
								{' Detecting'}
							</>
						) : (
							<>
								<FaCircle color="red" />
								{' Sleeping'}
							</>
						)}
					</span>
				</UserInfo>
				<LogOutButton onClick={onLogout}>
					<HiLogout />
				</LogOutButton>
			</UserInfoWrapper>
			<MainWrapper>
				<RiZzzFill />
			</MainWrapper>
			<ButtonStack>
				{!isDetect && (
					<>
						<StyledButton variant="contained" onClick={() => setOpen(true)}>
							시작하기
						</StyledButton>
						<StartModal open={open} onClose={() => setOpen(false)} />
					</>
				)}
				{isDetect && (
					<StyledButton variant="contained" color="error">
						긴급호출
					</StyledButton>
				)}
				{isDetect && <StyledButton variant="contained">종료하기</StyledButton>}
			</ButtonStack>
		</>
	);
};

export default UserCtrl;