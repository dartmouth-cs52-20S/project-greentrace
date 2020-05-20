import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to the home page.
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

export default Home;
