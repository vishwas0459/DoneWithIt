import React from 'react';
import { Text } from 'react-native';
import AppInputText from './app/components/AppInputText';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
	return (
		<Screen>
			<AppInputText iconName='email' placeholder='Username' />
		</Screen>
	);
}
