import React from 'react';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import { StyleSheet } from 'react-native';
import AppFormPicker from '../components/forms/AppFormPicker';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(2).label('Title'),
	price: Yup.number().required().min(1).label('Price'),
	category: Yup.object().nullable().label('Category'),
	description: Yup.string().required().label('Description')
});

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Camera', value: 3 }
];
function AddListingScreen(props) {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					category: null,
					description: ''
				}}
				validationSchema={validationSchema}
				onSubmit={values => console.log('Listing values', values)}
			>
				<AppFormField name='title' placeholder='Title' />
				<AppFormField name='price' placeholder='Price' keyboardType='numeric' maxLength={8} />
				<AppFormPicker items={categories} placeholder='Category' />
				<AppFormField name='description' placeholder='Description' numberOfLines={3} />
				<SubmitButton title='post' />
			</AppForm>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 20
	}
});
export default AddListingScreen;
