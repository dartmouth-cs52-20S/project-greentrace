import React, { Component } from 'react';
import Speedometer from 'react-native-speedometer-chart';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getRiskScore } from '../services/api';


class RiskDial extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getRiskScore();
  }

  renderAppropriateSpeedometer() {
    const { riskLevel } = this.props;
    if (riskLevel === 0) {
      return (
        <View>
          <Speedometer value={0} totalValue={7} showIndicator outerColor="lightgray" showLabels labelStyle={{ color: 'black' }} />
          <Text> Risk Level: 0</Text>
        </View>
      );
    } else if (riskLevel === 1) {
      return (
        <View>
          <Speedometer value={1} totalValue={7} showIndicator outerColor="lightgray" internalColor="green" showLabels labelStyle={{ color: 'black' }} />
          <Text> Risk Level: 1</Text>
        </View>
      );
    } else if (riskLevel === 2) {
      return (
        <View>
          <Speedometer value={2} totalValue={7} showIndicator outerColor="lightgray" internalColor="green" showLabels labelStyle={{ color: 'black' }} />
          <Text> Risk Level: 2</Text>
        </View>
      );
    } else if (riskLevel === 3) {
      return (
        <View>
          <Speedometer value={3} totalValue={7} showIndicator outerColor="lightgray" internalColor="green" showLabels labelStyle={{ color: 'black' }} />
          <Text> Risk Level: 3</Text>
        </View>
      );
    } else if (riskLevel === 4) {
      return (
        <View>
          <Speedometer value={4} totalValue={7} showIndicator outerColor="lightgray" internalColor="yellow" showLabels labelStyle={{ color: 'black' }} />
          <Text> Risk Level: 4</Text>
        </View>
      );
    } else if (riskLevel === 5) {
      return (
        <View>
          <Speedometer value={5} totalValue={7} showIndicator outerColor="lightgray" internalColor="yellow" showLabels labelStyle={{ color: 'black' }} />
          <Text> Risk Level: 5</Text>
        </View>
      );
    } else if (riskLevel === 6) {
      return (
        <View>
          <Speedometer value={6} totalValue={7} showIndicator outerColor="lightgray" internalColor="red" showLabels labelStyle={{ color: 'black' }} />
          <Text> Risk Level: 6</Text>
        </View>
      );
    } else if (riskLevel === 7) {
      return (
        <View>
          <Speedometer value={7} totalValue={7} showIndicator outerColor="lightgray" internalColor="red" showLabels labelStyle={{ color: 'black' }} />
          <Text> Risk Level: 7</Text>
        </View>
      );
    } else {
      console.log('this.props.riskLevel', riskLevel);
      return 0;
    }
  }

  render() {
    if (this.renderAppropriateSpeedometer() !== 0) {
      return (
        <View>
          {this.renderAppropriateSpeedometer()}
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
