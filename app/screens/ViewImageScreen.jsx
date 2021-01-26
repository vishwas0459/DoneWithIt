import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../config/colors';

function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.deleteIcon} />
			<View style={styles.closeIcon} />
			<Image style={styles.image} resizeMode='contain' source={require('../assets/chair.jpg')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black
	},
	image: {
		width: '100%',
		height: '100%'
	},
	closeIcon: {
		width: 40,
		height: 40,
		backgroundColor: colors.primary,
		position: 'absolute',
		top: 40,
		right: 20
	},
	deleteIcon: {
		width: 40,
		height: 40,
		backgroundColor: colors.secondary,
		position: 'absolute',
		top: 40,
		left: 20
	}
});
export default ViewImageScreen;
