/* eslint-disable react/destructuring-assignment */
import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getNumContactsPositive, getNumSymptoms, getNumTested, getNumPositive,
} from '../services/api';
import styles from '../styles/risk';

class RiskDetail extends Component {
  determineNumberOfCovidContacts() {
    this.props.getNumContactsPositive();
    const num = this.props.numPositiveContacts;
    console.log('numPositiveContacts:', num);
    return (
      <View style={styles.statistic}>
        <Text style={styles.statNumber}>{num}</Text>
        <Text style={styles.statLabel}>
          contacts who have tested positive
        </Text>
      </View>
    );
  }

  determineNumberOfTested() {
    this.props.getNumTested();
    const num = this.props.numTested;
    return (
      <View style={styles.statistic}>
        <Text style={styles.statNumber}>{num}</Text>
        <Text style={styles.statLabel}>
          users tested
        </Text>
      </View>
    );
  }

  determineNumberOfSymptoms() {
    this.props.getNumSymptoms();
    const num = this.props.numSymptoms;
    return (
      <View style={styles.statistic}>
        <Text style={styles.statNumber}>{num}</Text>
        <Text style={styles.statLabel}>
          symptoms
        </Text>
      </View>
    );
  }

  determineNumberOfPeopleInfected() {
    this.props.getNumPositive();
    const num = this.props.numPositive;
    console.log('Number of people infected', num);
    return (
      <View style={styles.statistic}>
        <Text style={styles.statNumber}>{num}</Text>
        <Text style={styles.statLabel}>
          positive users
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.determineNumberOfCovidContacts()}
        {this.determineNumberOfSymptoms()}
        {this.determineNumberOfTested()}
        {this.determineNumberOfPeopleInfected()}
      </View>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    numPositiveContacts: reduxState.risk.numPositiveContacts,
    numSymptoms: reduxState.risk.numSymptoms,
    numTested: reduxState.risk.numTested,
    numPositive: reduxState.risk.numPositive,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNumContactsPositive: () => dispatch(getNumContactsPositive()),
    getNumSymptoms: () => dispatch(getNumSymptoms()),
    getNumTested: () => dispatch(getNumTested()),
    getNumPositive: () => dispatch(getNumPositive()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RiskDetail);
