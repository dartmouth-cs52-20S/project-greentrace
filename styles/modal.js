import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  modalContainer: {
    width: wp('80%'),
    height: hp('80%'),
  },
});

export default styles;
