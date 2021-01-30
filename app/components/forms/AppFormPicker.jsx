import React from 'react';
import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

import { useFormikContext } from 'formik';

function AppFormPicker({ name, items, placeholder }) {
	const { errors, touched, setFieldValue, values } = useFormikContext();
	return (
		<>
			<AppPicker
				name={name}
				items={items}
				placeholder={placeholder}
				onSelectedItem={item => setFieldValue(name, item)}
				selectedItem={values[name]}
			/>
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormPicker;
