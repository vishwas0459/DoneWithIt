import React from 'react';
import { useFormikContext } from 'formik';
import AppInputText from '../AppInputText';
import AppErrorMessage from './AppErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
	const { errors, touched, setFieldTouched, handleChange, values } = useFormikContext();
	return (
		<>
			<AppInputText
				onChangeText={handleChange(name)}
				{...otherProps}
				onBlur={() => setFieldTouched(name)}
				width={width}
			/>
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormField;
