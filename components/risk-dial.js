import React, { Component } from 'react';
import Speedometer from 'react-native-speedometer-chart';
// import { connect } from 'react-redux';
import { getRiskScore } from '../services/api';


class RiskDial extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    getRiskScore();
  }

  render() {
    const { riskLevel } = this.props;
    return (
      <Speedometer value={riskLevel} totalValue={100} />
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching actions returned by action creators
//     getRiskScore: () => dispatch(getRiskScore()),
//   };
// };

// const mapStateToProps = (reduxState) => {
//   return {
//     riskLevel: reduxState.risk.riskLevel,
//   };
// };

export default RiskDial;
