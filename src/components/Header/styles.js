import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    backgroundColor: COLORS.primary,
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  icon: {height: 22, width: 22, marginHorizontal: 10},
  searchBox: {
    backgroundColor: 'white',
    borderRadius: 45 / 2,
    paddingLeft: 20,
    height: 45,
  },
  searchIconContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 10,
    alignSelf: 'flex-end',
    right: 15,
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
