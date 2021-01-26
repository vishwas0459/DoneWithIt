import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
	return (
		<ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
			<View style={styles.logoContainer}>
			<Image source={require('../assets/logo-red.png')} style={styles.logo} />
			<Text>Sell What You Don't Need</Text>
			</View>
			<View style={styles.loginButton}></View>
			<View style={styles.registerButton}></View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems:'center'
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: 'tomato'
	},
	logo: {
		width:120,
		height:120,
	},
	logoContainer:{
		position:'absolute',
		top:80,
		flex:1,
		alignItems:'center'
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: 'grey'
	}
});

export default WelcomeScreen;
