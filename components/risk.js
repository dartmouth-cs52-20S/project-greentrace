/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import MapBackground from './map-background';
import styles from '../styles/risk';
import RiskDial from './risk-dial';
import RiskDetail from './risk-detail';
import {
  getRiskScore, getNumContactsPositive, getNumSymptoms, getNumTested, getNumPositive,
} from '../services/api';

const riskObject = require('../lib/risk.json');

const riskInfo = riskObject.risk;

const headerText = 'Your Risk';

class Risk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  getRiskStyles(level) {
    console.log(RiskDial.getInternalRiskDialColor(level));
  }

  renderRisk(item) {
    const { level, description } = item;
    // const { riskLevel } = this.props;
    // const levelInt = parseInt(level, 10);
    // if (levelInt === riskLevel) {
    return (
      <View key={level} style={styles.riskAssessmentDescription}>
        <Text style={styles.riskAssessmentDescriptionRiskLevel}>
          {' '}
          Risk Level:
          {' '}
          {level}
          {' '}
        </Text>
        <Text style={styles.riskAssessmentText}>{description}</Text>
      </View>
    );
    // } else {
    //   return null;
    // }
  }

  renderModal() {
    const { isModalVisible } = this.state;
    if (isModalVisible) {
      return (
        <Modal isVisible={this.state.isModalVisible}>
          <ScrollView contentContainerStyle={styles.riskAssessmentContainer}>
            <View style={styles.riskAssessmentHeader}>
              <Ionicons style={styles.backButton} name="angle-left" onPress={() => { this.setState({ isModalVisible: false }); }} />
              <Text style={styles.riskAssessmentHeaderText}>{headerText}</Text>
            </View>
            {this.renderRisk(riskInfo[this.props.riskLevel])}
            {/* <FlatList
              data={riskInfo}
              renderItem={({ item }) => { return this.renderResource(item); }}
              keyExtractor={(item) => item.level}
              contentContainerStyle={styles.riskAssessment}
            /> */}
          </ScrollView>
        </Modal>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => { this.setState({ isModalVisible: true }); }} style={styles.button}><Text>Learn More</Text></TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <MapBackground>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {
            this.props.getRiskScore();
            this.props.getNumContactsPositive();
            this.props.getNumSymptoms();
            this.props.getNumTested();
            this.props.getNumPositive();
          }}
          >
            <View style={styles.refreshContainer}>
              <Ionicons name="refresh" size={26} style={styles.refresh} />
            </View>
          </TouchableOpacity>
          <RiskDial />
          {this.renderModal()}
          <RiskDetail />
        </View>
      </MapBackground>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return { riskLevel: reduxState.risk.riskLevel };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRiskScore: () => dispatch(getRiskScore()),
    getNumContactsPositive: () => dispatch(getNumContactsPositive()),
    getNumSymptoms: () => dispatch(getNumSymptoms()),
    getNumTested: () => dispatch(getNumTested()),
    getNumPositive: () => dispatch(getNumPositive()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Risk);
