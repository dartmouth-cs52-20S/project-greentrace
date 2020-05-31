import React, { Component } from 'react';
import {
  View, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements';
// import { logSymptoms } from '../services/api';

class SymptomCheck extends Component {
  constructor(props) {
    super(props);
  }
}

const mapStateToProps = (reduxState) => ({
  symptoms: reduxState.symptoms.symptoms,
});

export default connect(mapStateToProps, null)(SymptomCheck);
