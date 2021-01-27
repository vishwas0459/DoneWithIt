import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons name='trash-can-outline' size={35} color='white' />
			</View>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name='close' color='white' size={35} />
			</View>
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
		position: 'absolute',
		top: 40,
		right: 20
	},
	deleteIcon: {
		position: 'absolute',
		top: 40,
		left: 20
	}
});
export default ViewImageScreen;
