import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

import { colors } from '../../config/colors';
import AppText from '../AppText';

function ListItem({ IconComponent, image, title, subtitle, onPress, renderRightActions }) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{image && <Image style={styles.image} source={image} />}
					{IconComponent}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{subtitle && (
							<AppText style={styles.subtitle} numberOfLines={2}>
								{subtitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons style={styles.icon} name='chevron-right' size={25} color={colors.medium} />
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		padding: 15
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 40
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
