import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

class Alerts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to the alerts page.
        </Text>
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

export default Alerts;
