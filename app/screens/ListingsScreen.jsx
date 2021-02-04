import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import { colors } from '../config/colors';

const data = [
	{
		id: 1,
		title: 'Red jacket',
		price: 100,
		image: require('../assets/jacket.jpg')
	},
	{
		id: 2,
		title: 'Couch',
		price: 200,
		image: require('../assets/couch.jpg')
	}
];

function ListingsScreen({ navigation }) {
	return (
		<Screen style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={data => data.id.toString()}
				renderItem={({ item }) => (
					<Card
						onPress={() => navigation.navigate('ListingDetails', item)}
						image={item.image}
						title={item.title}
						subTitle={`$${item.price}`}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		padding: 15
	}
});
export default ListingsScreen;
