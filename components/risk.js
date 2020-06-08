import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Modal, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import MapBackground from './map-background';
import styles from '../styles/risk';
import RiskDial from './risk-dial';
import RiskDetail from './risk-detail';
// import RiskInfo from './riskModal';

const riskObject = require('../lib/risk.json');

const riskInfo = riskObject.risk;

const headerText = 'Risk Assessment Details';

class Risk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  renderResource(item) {
    console.log('item here', item);
    const { level, description } = item;
    console.log('level:', level, 'description:', description);
    const { riskLevel } = this.props;
    const levelInt = parseInt(level, 10);
    if (levelInt === riskLevel) {
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
    } else {
      return <View />;
    }
  }

  /*
<View style={styles.risk} key={level}>
        <Text>
          {' '}
          Risk Level:
          {' '}
          {level}
          {' '}
        </Text>
        <Text>{description}</Text>
      </View>
  */

  renderModal() {
    console.log('in render modal printin risk info', riskInfo);
    const { isModalVisible } = this.state;
    if (isModalVisible) {
      return (
        // eslint-disable-next-line react/destructuring-assignment
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.container}>
            <View style={styles.riskAssessmentHeader}>
              <Ionicons name="chevron-left" onPress={() => { this.setState({ isModalVisible: false }); }} style={styles.backButton} />
              <Text style={styles.riskAssessmentHeaderText}>{headerText}</Text>
            </View>
            <FlatList
              data={riskInfo}
              renderItem={({ item }) => { return this.renderResource(item); }}
              keyExtractor={(item) => item.level}
              contentContainerStyle={styles.riskAssessment}
            />
          </View>
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

export default connect(mapStateToProps, null)(Risk);
