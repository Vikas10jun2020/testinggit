import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  edittextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    alignItems: 'center',
    //marginTop: 10,
  },
  keyboardContainer: {
    flex: 0.5,
  },
  inputTxt: {
    backgroundColor: '#f2f2f2',
    width: 55,
    height: 55,
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    borderColor: COLORS.primary,
    borderWidth: 2,
    color: COLORS.primary,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    color: COLORS.primary,
    fontWeight: '700',
  },
});
