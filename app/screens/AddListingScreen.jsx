import React from 'react';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import { StyleSheet } from 'react-native';
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryItemPicker from '../components/CategoryItemPicker';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(2).label('Title'),
	price: Yup.number().required().min(1).label('Price'),
	category: Yup.object().nullable().label('Category'),
	description: Yup.string().required().label('Description')
});

const categories = [
	{
		backgroundColor: '#fc5c65',
		name: 'floor-lamp',
		label: 'Furniture',
		value: 1
	},
	{
		backgroundColor: '#fd9644',
		name: 'car',
		label: 'Cars',
		value: 2
	},
	{
		backgroundColor: '#fed330',
		name: 'camera',
		label: 'Cameras',
		value: 3
	},
	{
		backgroundColor: '#26de81',
		name: 'cards',
		label: 'Games',
		value: 4
	},
	{
		backgroundColor: '#2bcbba',
		name: 'shoe-heel',
		label: 'Clothing',
		value: 5
	},
	{
		backgroundColor: '#45aaf2',
		name: 'basketball',
		label: 'Sports',
		value: 6
	},
	{
		backgroundColor: '#4b7bec',
		name: 'headphones',
		label: 'Movies & Music',
		value: 7
	},
	{
		backgroundColor: '#a55eea',
		name: 'book-open-variant',
		label: 'Books',
		value: 8
	},
	{
		backgroundColor: '#778ca3',
		name: 'application',
		label: 'Other',
		value: 9
	}
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
				<AppFormField name='price' placeholder='Price' keyboardType='numeric' maxLength={8} width={120} />
				<AppFormPicker
					items={categories}
					width={150}
					numColumns={3}
					PickerItemComponent={CategoryItemPicker}
					placeholder='Category'
				/>
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
