import React from 'react';
import { AppForm, AppFormField } from '../components/forms';
import SubmitButton from '../components/forms/SubmitButton';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	name: Yup.string().required().label('Name'),
	password: Yup.string().required().label('Password')
});

function RegisterScreen(props) {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={values => console.log('User Registered', values)}
				validationSchema={validationSchema}
			>
				<AppFormField iconName='account' name='name' placeholder='Username' />
				<AppFormField iconName='email' name='email' placeholder='Email' />
				<AppFormField iconName='lock' name='password' placeholder='Password' />
				<SubmitButton title='Register' />
			</AppForm>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 20
	}
});
export default RegisterScreen;
