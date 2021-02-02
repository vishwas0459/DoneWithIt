import React, { useState } from 'react';
import ImageInput from './app/components/ImageInput';
import ListItem from './app/components/lists/ListItem';
import Screen from './app/components/Screen';
import AddListingScreen from './app/screens/AddListingScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
	const [imageUri, setImageUri] = useState(null);
	const handleImageChange = uri => {
		console.log('handleImageChange');
		setImageUri(uri);
	};
	return (
		<Screen>
			<ImageInput imageUri={imageUri} onImageChange={handleImageChange} />
		</Screen>
	);
}
