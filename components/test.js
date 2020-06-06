import React, { Component } from 'react';
import {
  View, Text,
} from 'react-native';
import MapImage from './test-map';

class Test extends Component {
  render() {
    return (
      <View>
        <Text>Map Image</Text>
        <MapImage />
      </View>
    );
  }
}

export default Test;
