import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
function ListItemDeleteAction({ onPress }) {
	return (
		<View style={styles.actionView}>
			<TouchableWithoutFeedback onPress={onPress}>
				<MaterialCommunityIcons name='trash-can-outline' size={30} color={colors.white} />
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	actionView: {
		backgroundColor: colors.danger,
		width: 70,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
export default ListItemDeleteAction;
