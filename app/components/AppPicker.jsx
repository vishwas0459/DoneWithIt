import React, { useState } from 'react';
import { FlatList, TouchableWithoutFeedback, Button, Modal, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ iconName, items, placeholder, selectedItem, onSelectedItem }) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{iconName && <MaterialCommunityIcons name={iconName} size={25} color={colors.medium} style={styles.icon} />}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons name='chevron-down' size={25} color={colors.medium} style={styles.icon} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType='slide'>
				<Button title='close' onPress={() => setModalVisible(false)} />
				<FlatList
					data={items}
					keyExtractor={item => item.value.toString()}
					renderItem={({ item }) => (
						<PickerItem
							label={item.label}
							onPress={() => {
								onSelectedItem(item.label);
								setModalVisible(false);
							}}
						/>
					)}
				/>
			</Modal>
		</>
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
	},
	text: {
		flex: 1
	},
	placeholder: {
		flex: 1,
		color: colors.medium
	}
});
export default AppPicker;
