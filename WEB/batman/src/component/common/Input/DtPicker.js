import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const DtPicker = ({ label, value,name, setValue }) => {
	const dtlabel = label ? label : '날짜 및 시간';
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				renderInput={(props) => <TextField {...props} />}
				label={dtlabel}
				name={name}
				value={value}
				onChange={(newValue) => {
					setValue(name,newValue);
				}}
			/>
		</LocalizationProvider>
	);
};

export default DtPicker;