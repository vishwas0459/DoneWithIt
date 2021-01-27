import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { colors } from '../config/colors';
import AppText from './AppText';
function ListItem({ image, title, price, onPress }) {
	return (
		<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
			<View style={styles.container}>
				<Image style={styles.image} source={image} />
				<View style={styles.userDetails}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subtitle}>{price}</AppText>
				</View>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10
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
