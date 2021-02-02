import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../config/colors';
import Screen from './Screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({ imageUri, onChangeImage }) {
	const handlePress = () => {
		if (!imageUri) {
			selectImage();
		} else {
			Alert.alert('Delete', 'Do you want to delete the image?', [
				{ text: 'Yes', onPress: () => onChangeImage(imageUri) },
				{ text: 'No' }
			]);
		}
	};
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!granted) {
			Alert.alert('We need permission to perform this action!');
		}
	};

	const selectImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			quality: 0.5
		});
		if (!result.cancelled) {
			onChangeImage(result.uri);
		}
	};
	useEffect(() => {
		requestPermission();
	}, []);
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		height: 100,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		borderRadius: 15,
		marginRight: 10
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 15,
		backgroundColor: colors.dark
	}
});

export default ImageInput;
