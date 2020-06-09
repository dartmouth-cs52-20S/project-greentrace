import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  error: {
    fontSize: wp('3%'),
    color: 'red',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: wp('66%'),
    height: hp('4.5%'),
    padding: hp('1%'),
    marginTop: hp('2.25%'),
  },
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 30,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    width: 300,
    maxHeight: 400,
  },
  field: {
    padding: hp('1%'),
  },
  fieldTitle: {
    fontSize: 15,
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginTop: 15,
  },
});

export default styles;
