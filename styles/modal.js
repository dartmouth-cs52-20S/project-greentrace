import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  confirmContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingVertical: hp('5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    width: wp('80%'),
    maxHeight: hp('55%'),
  },
  confirmStatus: {
    marginVertical: hp('1.5%'),
  },
  confirmStatusTitle: {
    fontSize: wp('4.5%'),
    textAlign: 'center',
  },
  confirmStatusInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: wp('2%'),
    marginVertical: hp('2%'),
  },
  confirmTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  confirmButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp('1%'),
  },
  confirmButton: {
    backgroundColor: 'green',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
  },
  confirmCancelText: {
    color: 'white',
    fontWeight: '500',
    fontSize: wp('4%'),
  },
  statusContentText: {
    fontSize: wp('4%'),
  },
});

export default styles;
