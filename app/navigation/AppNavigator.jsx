import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingsScreen from '../screens/ListingsScreen';
import AddListingScreen from '../screens/AddListingScreen';
import AccountScreen from '../screens/AccountScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingNavigationBtn from './NewListingNavigationBtn';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Feed'
				component={FeedNavigator}
				options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} /> }}
			/>
			<Tab.Screen
				name='AddListings'
				component={AddListingScreen}
				options={({ navigation }) => ({
					tabBarButton: () => <NewListingNavigationBtn onPress={() => navigation.navigate('AddListings')} />
				})}
			/>
			<Tab.Screen
				name='Account'
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color} />
				}}
			/>
		</Tab.Navigator>
	);
}

export default AppNavigator;
