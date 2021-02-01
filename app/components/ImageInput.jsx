import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Screen from './Screen';
import AppButton from './AppButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ImageInput(props) {
	const [imageURI, setImageURI] = useState(null);
	const getPermission = async () => {
		const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();
		if (!granted) alert('You need to allow this access!');
	};

	useEffect(() => {
		getPermission();
	}, []);

	const onSelectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			// console.log('onSelectImage', result);
			setImageURI(result.uri);
		} catch (error) {
			console.log('Error Occurred', error);
		}
	};
	return (
		<Screen style={styles.container}>
			<Button title='Select Image' color='grey' onPress={onSelectImage} />
			<TouchableWithoutFeedback
				onPress={() =>
					Alert.prompt('Image Selection', 'Do you want to remove image?', [
						{
							text: 'Yes',
							onPress: () => setImageURI(null)
						},
						{
							text: 'Cancel',
							onPress: () => console.log('Canceled')
						}
					])
				}
			>
				{imageURI && <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />}
			</TouchableWithoutFeedback>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	}
});

export default ImageInput;
