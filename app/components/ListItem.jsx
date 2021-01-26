import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppText from './AppText';
function ListItem({ image, title, price }) {
	return (
		<View style={styles.userContainer}>
			<Image style={styles.image} source={image} />
			<View style={styles.userDetails}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subtitle}>{price}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	userContainer: {
		flexDirection: 'row'
	},
	userDetails: {
		marginVertical: 10
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginRight: 10
	},
	title: {
		fontSize: 20,
		fontWeight: '300',
		color: 'black'
	},
	subtitle: {
		fontSize: 18,
		color: 'grey',
		fontWeight: '200'
	}
});
export default ListItem;
