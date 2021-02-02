import React, { useState } from 'react';
import AppText from './app/components/AppText';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListItem from './app/components/lists/ListItem';
import Screen from './app/components/Screen';
import AddListingScreen from './app/screens/AddListingScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
	return (
		<Screen>
			<AddListingScreen />
		</Screen>
	);
}
