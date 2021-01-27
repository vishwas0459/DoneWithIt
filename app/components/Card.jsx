import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../config/colors';
import AppText from './AppText';
function Card({ image, title, subTitle }) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View style={styles.details}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		marginBottom: 20,
		borderRadius: 15,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: 200
	},
	title: {
		fontSize: 20,
		color: colors.black,
		fontWeight: '600',
		marginBottom: 10
	},
	details: {
		padding: 20
	},
	subTitle: {
		color: colors.secondary
	}
});
export default Card;
