import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
	return (
		<ImageBackground style={styles.background} blurRadius={5} source={require('../assets/background.jpg')}>
			<View style={styles.logoContainer}>
				<Image source={require('../assets/logo-red.png')} style={styles.logo} />
				<Text style={styles.tagLine}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton title='Login' onPress={() => console.log('Login Tapped')} />
				<AppButton title='Register' color='secondary' onPress={() => console.log('Register Tapped')} />
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	buttonsContainer: {
		width: '100%',
		padding: 10
	},
	logo: {
		width: 120,
		height: 120
	},
	logoContainer: {
		position: 'absolute',
		top: 80,
		flex: 1,
		alignItems: 'center'
	},
	tagLine: {
		fontSize: 25,
		fontWeight: 'bold',
		paddingVertical: 10
	}
});

export default WelcomeScreen;
