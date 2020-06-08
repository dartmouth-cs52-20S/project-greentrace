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
<<<<<<< HEAD
    paddingVertical: hp('5%'),
=======
    paddingHorizontal: wp('20%'),
    // paddingVertical: hp('5%'),
>>>>>>> 72f83c86626facb5534e79f8acc95a65faf439e7
  },
  statistic: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: wp('70%'),
    alignSelf: 'center',
    paddingLeft: wp('9%'),
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
    paddingTop: hp('5%'),
    // paddingBottom: hp('10%'),
  },
  dialLabel: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: wp('5%'),
  },
  button: {
    backgroundColor: 'salmon',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    borderRadius: 5,
    marginBottom: hp('5%'),
  },
  risk: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 7,
    backgroundColor: 'white',
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
  },
  riskAssessmentHeaderText: {
    fontSize: wp('5%'),
  },
  backButton: {
    marginRight: wp('7%'),
    marginLeft: wp('8%'),
  },
  riskAssessmentDescription: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('5%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('70%'),
    height: hp('45%'),
    backgroundColor: 'salmon',
    borderRadius: 25,
  },
  riskAssessmentDescriptionRiskLevel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: hp('5%'),
  },
  riskAssessmentText: {
    textAlign: 'center',
    fontSize: 17,
  },
});

export default RiskStyles;
