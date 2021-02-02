import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
	const scrollViewRef = useRef();

	return (
		<View>
			<ScrollView horizontal={true} ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}>
				<View style={styles.container}>
					{imageUris.map(imageUri => (
						<ImageInput imageUri={imageUri} key={imageUri} onChangeImage={imageUri => onRemoveImage(imageUri)} />
					))}
					<ImageInput onChangeImage={imageUri => onAddImage(imageUri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	}
});

export default ImageInputList;
