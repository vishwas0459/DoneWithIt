import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
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
					// <View style={styles.listContainer}>
					<ListItem
						// style={styles.listItem}
						title={item.title}
						subtitle={item.description}
						image={item.image}
						onPress={() => console.log('item', item)}
						renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
					/>
					// </View>
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

const styles = StyleSheet.create({});
export default MessagesScreen;
