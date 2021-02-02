import { useFormikContext } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import AppErrorMessage from './AppErrorMessage';

function AppFormImagePicker({ name }) {
	const { values, errors, touched, setFieldValue, setFieldTouched } = useFormikContext();
	const handleAddImage = imageUri => {
		setFieldValue(name, [...values[name], imageUri]);
	};

	const handleRemoveImage = imageUri => {
		const updateImageUris = values[name].filter(uri => uri !== imageUri);
		console.log('handleRemoveImage', imageUri);
		setFieldValue(name, [...updateImageUris]);
	};
	return (
		<>
			<ImageInputList imageUris={values[name]} onAddImage={handleAddImage} onRemoveImage={handleRemoveImage} />
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

const styles = StyleSheet.create({
	container: {}
});

export default AppFormImagePicker;
