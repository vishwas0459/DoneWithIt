import React from 'react';
import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

import { useFormikContext } from 'formik';

function AppFormPicker({ numColumns, name, items, placeholder, PickerItemComponent, width }) {
	const { errors, touched, setFieldValue, values } = useFormikContext();
	return (
		<>
			<AppPicker
				name={name}
				items={items}
				numColumns={numColumns}
				placeholder={placeholder}
				PickerItemComponent={PickerItemComponent}
				onSelectedItem={item => setFieldValue(name, item)}
				selectedItem={values[name]}
				width={width}
			/>
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormPicker;
