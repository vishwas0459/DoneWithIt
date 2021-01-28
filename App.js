import React from 'react';
import { Text } from 'react-native';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';

export default function App() {
	return (
		<Screen>
			<Icon name='email' size={150} backgroundColor='red' iconColor='white' />
			{/* <Text>Hi</Text> */}
		</Screen>
	);
}
