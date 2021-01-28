import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { colors } from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
function ListItem({ IconComponent, image, title, subtitle, onPress, renderRightActions }) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{image && <Image style={styles.image} source={image} />}
					{IconComponent}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10
	},
	detailsContainer: {
		marginVertical: 10,
		marginLeft: 10
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
