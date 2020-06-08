import React from 'react';
import {
  View,
} from 'react-native';
import MapBackground from './map-background';
import styles from '../styles/risk';
import RiskDial from './risk-dial';
import RiskDetail from './risk-detail';

const Risk = (props) => {
  return (
    <MapBackground>
      <View style={styles.container}>
        <RiskDial />
        <RiskDetail />
      </View>
    </MapBackground>
  );
};

export default Risk;
