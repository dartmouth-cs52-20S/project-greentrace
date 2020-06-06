import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

class Risk extends Component {
  static HeaderRight = (props) => {
    console.log('in risk headerright!');
    const { navigation } = props;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('RiskInfo'); }}>
        <Ionicons iconName="info-circle" color="white" />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the risk assessment page!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Risk;
