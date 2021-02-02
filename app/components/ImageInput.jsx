import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../config/colors';
import Screen from './Screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({ imageURI }) {
	const handlePress = () => {
		if (!imageURI) selectImage();
	};
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) {
			Alert.alert('Delete');
		}
	};
	const selectImage = () => {
		console.log('selectImage');
	};
	useEffect(() => {
		requestPermission();
	}, []);
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageURI ? (
					<MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
				) : (
					<Image source={{ uri: imageURI }} style={styles.image} />
				)}
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
		borderRadius: 15
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 15,
		backgroundColor: colors.dark
	}
});

export default ImageInput;
