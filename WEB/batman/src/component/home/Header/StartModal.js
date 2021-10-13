import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import ModalBox from '../../common/ModalBox';
import RunwayList from '../../home/Runway/RunwayList';
import DtPicker from '../../common/Input/DtPicker';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAttr } from '../../../module/start_property';

const FormWrapper = styled.form`
	display: flex;
	flex-flow: column wrap;
	justify-content: space-evenly;
	align-items: center;
	height: 40vh;
`;

const BtnGroup = ({ onClose }) => {
	return (
		<Stack spacing={2} direction="row">
			<Button variant="outlined" onClick={onClose}>
				시작하기
			</Button>
			<Button variant="outlined" onClick={onClose}>
				취소
			</Button>
		</Stack>
	);
};

const RunwayListCntr = ({ runwayForm }) => {
	console.log(runwayForm);
	const { value, handleChange, list } = runwayForm;
	return <RunwayList value={value} handleChange={handleChange} list={list} />;
};

const StartForm = ({ onClose, runwayForm }) => {
	const dispatch = useDispatch();
	const [checked, setChecked] = useState({
		start: false,
		end: false,
	});
	const { startTime, endTime } = useSelector((state) => ({
		startTime: state.start_property.startTime,
		endTime: state.start_property.endTime,
	}));
	const handleChange = (name, value) => {
		dispatch(changeAttr({ name, value }));
	};
	const handleCheck = (type) => {
		if (type === 'start') {
			if (checked.start) {
				dispatch(changeAttr({ name: 'startTime', value: Date.now() }));
				dispatch(changeAttr({ name: 'isNow', value: true }));
			} else {
				dispatch(changeAttr({ name: 'startTime', value: null }));
				dispatch(changeAttr({ name: 'isStartNow', value: false }));
			}
		} else {
			if (checked.end) {
				dispatch(changeAttr({ name: 'endTime', value: null }));
				dispatch(changeAttr({ name: 'isEnd', value: false }));
			} else {
				dispatch(changeAttr({ name: 'endTime', value: Date.now() }));
				dispatch(changeAttr({ name: 'i', value: true }));
			}
		}
	};
	const onCheckChange = (type) => {
		setChecked({ ...checked, [type]: !checked[type] });
	};

	useEffect(() => {
		handleCheck('start');
	}, [checked.start]);

	useEffect(() => {
		handleCheck('end');
	}, [checked.end]);

	return (
		<FormWrapper>
			<span style={{ fontWeight: 'bold', fontSize: '2rem' }}>BATMAN</span>
			<RunwayListCntr runwayForm={runwayForm} />
			<DtPicker label={'시작 시각'} name="startTime" value={startTime} setValue={handleChange} />
			<DtPicker label={'종료 시각'} name="endTime" value={endTime} setValue={handleChange} />
			<FormControlLabel
				control={<Checkbox checked={checked.start} onChange={() => onCheckChange('start')} />}
				label="지금 시작"
			/>
			<BtnGroup onClose={onClose} />
		</FormWrapper>
	);
};
// 현재 시간 : 체크하면 redux 현재 시간으로 맞춰주기
// redux에 start_property 는 "now" 로 설정해주기

const StartModal = ({ open, onClose }) => {
	const dispatch = useDispatch();
	const form = useSelector((state) => ({
		form: state.start_property,
	}));

	const handleChange = (e) => {
		dispatch(changeAttr({ name: e.target.name, value: e.target.value }));
	};

	const runwayForm = {
		value: form.form.runwaySelected,
		handleChange,
		list: form.form.runwayList,
	};

	return (
		<ModalBox open={open} onClose={onClose}>
			<StartForm onClose={onClose} runwayForm={runwayForm} />
		</ModalBox>
	);
};

export default StartModal;