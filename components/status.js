import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

class Status extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to the status page.
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

export default Status;
