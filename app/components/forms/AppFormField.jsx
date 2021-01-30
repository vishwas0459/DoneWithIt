import React from 'react';
import { useFormikContext } from 'formik';
import AppInputText from '../AppInputText';
import AppErrorMessage from './AppErrorMessage';

function AppFormField({ name, ...otherProps }) {
	const { errors, touched, setFieldTouched, handleChange, values } = useFormikContext();
	return (
		<>
			<AppInputText onChangeText={handleChange(name)} {...otherProps} onBlur={() => setFieldTouched(name)} />
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormField;
