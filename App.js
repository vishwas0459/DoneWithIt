import React, { useState } from 'react';
import AppText from './app/components/AppText';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListItem from './app/components/lists/ListItem';
import Screen from './app/components/Screen';
import AddListingScreen from './app/screens/AddListingScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
	const [imageUris, setImageUris] = useState([]);

	handleAddImage = imageUri => {
		setImageUris([...imageUris, imageUri]);
	};

	handleRemoveImage = imageUri => {
		const updateImageUris = imageUris.filter(uri => uri !== imageUri);
		console.log('handleRemoveImage', imageUri);

		setImageUris([...updateImageUris]);
	};
	return (
		<Screen>
			<ImageInputList imageUris={imageUris} onAddImage={handleAddImage} onRemoveImage={handleRemoveImage} />
		</Screen>
	);
}
