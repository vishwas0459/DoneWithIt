import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import { colors } from '../config/colors';

const listData = [
	{
		title: 'My Listings',
		icon: {
			name: 'email',
			backgroundColor: colors.primary
		}
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary
		}
	}
];
function AccountScreen(props) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem title='Mosh' subtitle='mosh@gmail.com' image={require('../assets/mosh.jpg')} />
			</View>
			<View style={styles.container}>
				<FlatList
					data={listData}
					keyExtractor={data => data.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
							// FIX: onPress not working
							onPress={() => alert('item')}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<View style={styles.container}>
				<ListItem
					title='Log Out'
					// FIX: onPress not working
					onPress={() => console.log('LogOut Tapped')}
					IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
				/>
			</View>
		</Screen>
	);
}
const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light
	},
	container: {
		marginVertical: 20,
		backgroundColor: colors.white
	}
});
export default AccountScreen;
