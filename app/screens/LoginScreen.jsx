import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import { AppForm, SubmitButton, AppFormField } from '../components/forms';
// create validationSchema
const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string()
		.required()
		// .matches(
		// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
		// 	'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		// )
		.label('Password')
});
function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<Image style={styles.image} source={require('../assets/logo-red.png')} />

			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={values => console.log('values ', values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					iconName='email'
					placeholder='Email address'
					autoCorrect={false}
					keyboardType='email-address'
					secureTextEntry={false}
					textContentType='emailAddress' // works only on iPhone
					name='email'
				/>
				<AppFormField
					iconName='lock'
					placeholder='Password'
					autoCorrect={false}
					secureTextEntry={true}
					textContentType='password'
					name='password'
				/>
				<SubmitButton title='Login' />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	image: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 100,
		marginBottom: 20
	}
});
export default LoginScreen;
