import React, { useState } from 'react';
import { Text } from 'react-native';
import AppInputText from './app/components/AppInputText';
import AppPicker from './app/components/AppPicker';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Camera', value: 2 },
	{ label: 'Couch', value: 3 }
];
export default function App() {
	const [category, setCategory] = useState();
	return (
		<Screen>
			<AppPicker
				iconName='apps'
				placeholder='Category'
				items={categories}
				selectedItem={category}
				onSelectedItem={item => setCategory(item)}
			/>
			<AppInputText iconName='email' placeholder='Username' />
		</Screen>
	);
}
