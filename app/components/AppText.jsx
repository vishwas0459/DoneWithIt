import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import { colors } from '../config/colors';
function AppText({ children, style, ...otherProps }) {
	return (
		<Text style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		color: colors.dark,
		...Platform.select({
			ios: {
				fontFamily: 'Avenir',
				fontSize: 20
			},
			android: {
				fontFamily: 'Roboto',
				fontSize: 18
			}
		})
	}
});
export default AppText;
