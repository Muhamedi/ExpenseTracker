import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    borderColor: '#5bc0de',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainInfo: {
    fontWeight: 'bold',
  },
  details: {
    color: 'grey',
  },
});
