import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';

function CategoryItemPicker({ item, onPress }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Icon name={item.name} size={60} backgroundColor={item.backgroundColor} />
			</TouchableOpacity>
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		alignItems: 'center',
		width: '33.33%'
	},
	label: {
		marginTop: 5,
		textAlign: 'center'
	}
});

export default CategoryItemPicker;
