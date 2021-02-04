import { DefaultTheme } from '@react-navigation/native';
import { colors } from '../config/colors';

const appTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: 'tomato',
		backgroundColor: colors.white
	}
};

export default appTheme;
