import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('80%'),
    width: wp('80%'),
    backgroundColor: 'black',
  },
});

export default styles;
