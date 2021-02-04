import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
function ListingDetailsScreen({ route }) {
	const listing = route.params;
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={listing.image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.subTitle}>${listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem title='Mosh' price='$100' image={require('../assets/mosh.jpg')} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	detailsContainer: {
		padding: 20
	},
	userContainer: {
		marginVertical: 30
	},
	image: {
		width: '100%',
		height: 300
	},
	title: {
		fontSize: 25,
		fontWeight: '500',
		color: 'black',
		marginVertical: 10
	},
	subTitle: {
		fontSize: 20,
		fontWeight: '300',
		color: 'red'
	}
});

export default ListingDetailsScreen;
