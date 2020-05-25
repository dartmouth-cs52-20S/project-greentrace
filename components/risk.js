import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

class Risk extends Component {
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
