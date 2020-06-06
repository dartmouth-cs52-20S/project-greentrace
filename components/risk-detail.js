/* eslint-disable react/destructuring-assignment */
import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getNumContactsPositive, getNumSymptoms, getNumTested, getNumPositive,
} from '../services/api';

class RiskDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  determineNumberOfCovidContacts() {
    this.props.getNumContactsPositive();
    const num = this.props.numPositiveContacts;
    console.log('numPositiveContacts:', num);
    return (
      <Text>
        Number of Contacts That Have Tested Positive:
        {' '}
        {num}
      </Text>
    );
  }

  determineNumberOfTested() {
    this.props.getNumTested();
    const num = this.props.numTested;
    return (
      <Text>
        Number of Users Tested:
        {' '}
        {num}
      </Text>
    );
  }

  determineNumberOfSymptoms() {
    this.props.getNumSymptoms();
    const num = this.props.numSymptoms;
    return (
      <Text>
        Number of Symptoms:
        {' '}
        {num}
      </Text>
    );
  }

  determineNumberOfPeopleInfected() {
    this.props.getNumPositive();
    const num = this.props.numPositive;
    console.log('Number of people infected', num);
    return (
      <Text>
        Number of Positive Users:
        {' '}
        {num}
      </Text>
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
