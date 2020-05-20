import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to the profile page.
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

export default Profile;
