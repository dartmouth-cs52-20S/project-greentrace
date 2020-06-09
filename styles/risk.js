import {
  StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RiskStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: hp('20%'),
    marginTop: hp('5%'),
    borderRadius: 10,
    marginHorizontal: hp('5%'),
    backgroundColor: 'white',
    // paddingHorizontal: wp('20%'),
    // paddingVertical: hp('2%'),
  },
  statistic: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: wp('70%'),
    alignSelf: 'center',
    paddingLeft: wp('5%'),
    // justifyContent: 'center',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: wp('10%'),
    color: 'black',
    textAlign: 'right',
    paddingRight: wp('8%'),
  },
  statLabel: {
    fontSize: wp('5.33333333%'),
    color: 'black',
    textAlign: 'left',
    maxWidth: wp('50%'),
  },
  statContainer: {
    maxHeight: hp('40%'),
    alignSelf: 'center',
    paddingVertical: hp('2%'),
  },
  riskDialContainer: {
    paddingHorizontal: wp('10%'),
    // paddingBottom: hp('10%'),
  },
  dialLabel: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: wp('5%'),
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    borderRadius: 5,
    marginBottom: hp('1%'),
    marginTop: hp('2%'),
    borderWidth: wp('0.3%'),
  },
  risk: {
    flexDirection: 'column',
    marginHorizontal: wp('2%'),
    marginVertical: hp('5%'),
    padding: hp('2%'),
    borderRadius: 7,
    backgroundColor: 'blue',
  },
  riskAssessment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  riskAssessmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('80%'),
    justifyContent: 'flex-start',
    marginTop: hp('5%'),
  },
  riskAssessmentHeaderText: {
    fontSize: wp('5%'),
  },
  backButton: {
    marginRight: wp('7%'),
    marginLeft: wp('5%'),
    fontSize: 30,
  },
  riskAssessmentDescription: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('5%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('70%'),
    height: hp('45%'),
    backgroundColor: 'lightgreen',
    borderRadius: 25,
    borderWidth: wp('0.3%'),
  },
  riskAssessmentDescriptionRiskLevel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: hp('5%'),
  },
  riskAssessmentText: {
    textAlign: 'center',
    fontSize: 14,
  },
  refreshContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor: 'blue',
    height: hp('5%'),
    width: wp('75%'),
    // padding: hp('1%'),
    margin: hp('2%'),
    paddingRight: wp('3%'),
  },
  refresh: {
    color: 'black',
    // marginVertical: hp('10%'),
    // marginHorizontal: wp('2%'),
  },
});

export default RiskStyles;
