import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  overviewContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: wp('3%'),
    marginVertical: hp('3%'),
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('20%'),
    marginTop: hp('5%'),
    borderRadius: 10,
    marginHorizontal: hp('5%'),
    backgroundColor: 'white',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('5%'),
    paddingBottom: hp('10%'),
  },
  information: {
    textAlign: 'center',
  },
  backButton: {
    fontSize: hp('5%'),
    alignSelf: 'flex-start',
  },
  thumbnail: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('70%'),
    height: hp('10%'),
    borderRadius: 7,
    backgroundColor: 'white',
  },
  thumbnailIcon: {
    marginHorizontal: wp('1%'),
    marginRight: wp('3%'),
    fontSize: wp('5.2%'),
    alignSelf: 'center',
    paddingVertical: hp('1%'),
  },
  thumbnailMessage: {
    fontSize: wp('5.5%'),
    flexWrap: 'wrap',
  },
  emptyState: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('30%'),
    alignSelf: 'center',
  },
  emptyStateMessage: {
    fontSize: wp('5%'),
    fontWeight: '500',
    color: 'white',
  },
  detailDate: {
    fontSize: wp('4.5%'),
  },
  detailInformation: {
    fontSize: wp('4%'),
    textAlign: 'center',
  },
  detailIcon: {
    fontSize: wp('8%'),
  },
  refresh: {
    color: 'white',
    marginVertical: hp('5%'),
    marginHorizontal: wp('2%'),
  },
});

export default styles;
