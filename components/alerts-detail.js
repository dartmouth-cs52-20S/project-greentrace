import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
// import getDateUSFormatString from '../lib/date-lib';


class AlertsDetail extends Component {
  render() {
    const { currentMessage } = this.props;
    const {
      timestamp, contactDate, covid, tested,
    } = currentMessage;
    let notification, recommendation;
    if (covid && tested) {
      notification = `A student you were last in contact with on ${contactDate} has been tested (as previously alerted) and diagnosed as positive for COVID-19.`;
      recommendation = 'We recommend checking your symptoms and scheduling an appointment to get tested at Dick’s House or DHMC.';
    } else if (!covid && tested) {
      notification = `Earlier, you were alerted that a student you were last in contact with on ${contactDate} was being tested for COVID-19; we are pleased to report that the individual in question tested negative.`;
      recommendation = 'Please continue to monitor potential symptoms.';
    } else { // not tested/is being tested
      notification = `A student you were last in contact with ${contactDate} is being tested for COVID-19.`;
      recommendation = 'We recommend checking your symptoms and checking back here for more information soon.';
    }
    return (
      <View style={styles.modalView}>
        <Ionicons name="arrow-back" />
        <Text>{timestamp}</Text>
        <Ionicons name="warning" />
        <Text>{notification}</Text>
        <Text>{recommendation}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (reduxState) => {
  return {
    currentMessage: reduxState.messages.currMessage,
  };
};

export default connect(mapStateToProps, null)(AlertsDetail);
