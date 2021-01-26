import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	return (
		<View style={{ backgroundColor: 'grey', padding: 20, paddingTop: 120 }}>
			<Card title='Red Jacket for sale!' subTitle='$100' image={require('./app/assets/jacket.jpg')} />
		</View>
	);
}
