import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
function NewListingNavigationBtn({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons name='plus-circle' size={40} color={colors.white} />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 20,
		width: 80,
		height: 80,
		borderColor: colors.white,
		borderWidth: 20,
		borderRadius: 40,
		backgroundColor: colors.primary
	}
});

export default NewListingNavigationBtn;
