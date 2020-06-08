import React, { Component } from 'react';
import Speedometer from 'react-native-speedometer-chart';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getRiskScore } from '../services/api';
import styles from '../styles/risk';


class RiskDial extends Component {
  componentDidMount = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getRiskScore();
  }

  getInternalRiskDialColor(level) {
    switch (level) {
      case 0:
        return '';
      case 1:
        return 'green';
      case 2:
        return 'green';
      case 3:
        return 'green';
      case 4:
        return 'yellow';
      case 5:
        return 'yellow';
      case 6:
        return 'red';
      case 7:
        return 'red';
      default:
        return '';
    }
  }

  render() {
    const { riskLevel } = this.props;
    if (riskLevel >= 1 && riskLevel <= 7) {
      const innerColor = this.getInternalRiskDialColor(riskLevel);
      return (
        <View style={styles.riskDialContainer}>
          <Speedometer value={riskLevel} totalValue={7} showIndicator outerColor="lightgray" internalColor={innerColor} showLabels labelStyle={{ color: 'black' }} />
          <Text style={styles.dialLabel}>
            Current Risk Level:
            {' '}
            {riskLevel}
          </Text>
        </View>
      );
    } else {
      return (
        <Text> Error Displaying Risk Dial</Text>
      );
    }
  }
}

const mapStateToProps = (reduxState) => {
  return {
    riskLevel: reduxState.risk.riskLevel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRiskScore: () => dispatch(getRiskScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RiskDial);
