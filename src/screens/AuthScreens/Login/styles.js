import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: 'white',
    margin: 20,
    elevation: 10,
    borderRadius: 10,

    padding: 10,
    height: Dimensions.get('window').height - 100,
  },
});
