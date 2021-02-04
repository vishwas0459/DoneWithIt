import React, { useState } from 'react';
import AppText from './app/components/AppText';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './app/components/Screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Link = () => {
// 	const navigation = useNavigation();
// 	return <Button title={'Link'} onPress={() => navigation.navigate('TweetDetails')} />;
// };
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppNavigator from './app/navigation/AppNavigator';
const Account = () => (
	<Screen>
		<AppText>Account</AppText>
	</Screen>
);

const Tweet = ({ navigation }) => (
	<Screen>
		<AppText>Tweet</AppText>
		<Button title='See Details' onPress={() => navigation.navigate('TweetDetails', { id: 'vishwas' })} />
	</Screen>
);
const TweetDetails = ({ route }) => (
	<Screen>
		<AppText>TweetDetails {route.params.id}</AppText>
	</Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Tweet' component={Tweet} />
			<Stack.Screen
				name='TweetDetails'
				component={TweetDetails}
				options={({ route }) => ({
					title: route.params.id,
					headerStyle: { backgroundColor: 'red' },
					headerTintColor: 'white'
					// headerShown: false
				})}
			/>
		</Stack.Navigator>
	);
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
	<Tab.Navigator
		tabBarOptions={{
			activeBackgroundColor: 'tomato',
			activeTintColor: 'white',
			inactiveBackgroundColor: '#333',
			inactiveTintColor: 'black'
		}}
	>
		<Tab.Screen
			name='Home'
			component={Tweet}
			options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} /> }}
		/>
		<Tab.Screen
			name='Account'
			component={Account}
			options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color} /> }}
		/>
	</Tab.Navigator>
);
export default function App() {
	return (
		// <AppText>HI</AppText>
		// <NavigationContainer>
		// 	{/* <StackNavigator /> */}
		// 	<TabNavigator />
		// </NavigationContainer>
		<AppNavigator />
	);
}
