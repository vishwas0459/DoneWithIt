import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name='Welcome'
			component={WelcomeScreen}
			options={{
				headerShown: false
			}}
		/>
		<Stack.Screen name='Login' component={LoginScreen} />
		<Stack.Screen name='Register' component={RegisterScreen} />
	</Stack.Navigator>
);

function AppNavigator(props) {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}

export default AppNavigator;
