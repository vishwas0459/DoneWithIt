import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, TextInput, View, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../config/colors';
import { defaultStyles } from '../config/styles';

function AppInputText({ iconName, ...restProps }) {
	// FIX - enable autoHide of keyboard on blur
	return (
		// <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		<View style={styles.container}>
			{iconName && <MaterialCommunityIcons name={iconName} size={25} color={colors.medium} style={styles.icon} />}
			<TextInput style={defaultStyles.text} {...restProps} placeholderTextColor={colors.medium} />
		</View>
		// </TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		padding: 15,
		width: '100%',
		flexDirection: 'row',
		margin: 10,
		borderRadius: 20
	},
	icon: {
		marginRight: 10
	}
});
export default AppInputText;
