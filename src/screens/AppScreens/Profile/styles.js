import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  upperContainer: {
    height: (Dimensions.get('screen').height = 150),
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {height: '100%', width: '100%'},
  text1: {
    marginTop: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text3: {
    position: 'absolute',
    bottom: 10,
    color: COLORS.primary,
    backgroundColor: 'rgba(255,255,255,.80)',
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 2,
    fontSize: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  container: {
    alignItems: 'flex-end',
    padding: 20,
    justifyContent: 'center',
  },
});
