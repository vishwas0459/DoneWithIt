import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import Screen from '../components/Screen';

const initialMessages = [
	{ id: 1, title: 'T1', description: 'D1', image: require('../assets/mosh.jpg') },
	{ id: 2, title: 'T2', description: 'D2', image: require('../assets/mosh.jpg') }
];
function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = item => {
		const updatedMessages = messages.filter(msg => msg.id !== item.id);
		setMessages(updatedMessages);
	};
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={messages => messages.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						price={item.description}
						image={item.image}
						onPress={() => console.log('item', item)}
						renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([{ id: 2, title: 'T2', description: 'D2', image: require('../assets/mosh.jpg') }]);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {}
});
export default MessagesScreen;
