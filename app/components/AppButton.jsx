import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../config/colors';
function AppButton({ title, color = 'primary', onPress }) {
	return (
		<TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		borderRadius: 25,
		marginVertical: 10
	},
	text: {
		color: colors.white,
		fontSize: 18,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	}
});
export default AppButton;
