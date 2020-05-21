import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button,
} from 'react-native';
import { getLocations, sendLocation } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      locations: '',
      postResponse: '',
    };
  }

  handleSendLocation = () => {
    const { latitude, longitude } = this.state;
    sendLocation({ latitude, longitude })
      .then((response) => {
        console.log('in handleSendLocation');
        console.log(response);
        this.setState({ postResponse: response });
      })
      .catch((error) => {
        console.log('error in send boo');
        console.log(error);
      });
  }

  handleGetLocations = () => {
    getLocations()
      .then((locations) => {
        console.log(locations);
        this.setState({ locations });
      })
      .catch((error) => {
        console.log('error in get boooo');
        console.log(error);
      });
  }

  renderLocations = () => {
    const { locations } = this.state;
    if (locations === '') {
      return (
        <View />
      );
    } else {
      return (
        <Text>
          {locations}
        </Text>
      );
    }
  }

  renderPosted = () => {
    const { postResponse } = this.state;
    if (postResponse !== '') {
      return (
        <View />
      );
    } else {
      return (
        <Text>
          {postResponse}
        </Text>
      );
    }
  }

  render() {
    const { latitude, longitude } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          Welcome to the home page.
        </Text>
        <Text>Latitude</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => {
            this.setState({ latitude: text });
          }}
          value={latitude}
        />
        <Text>Longitude</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => {
            this.setState({ longitude: text });
          }}
          value={longitude}
        />
        <Button onPress={() => { this.handleSendLocation(); }} title="Send Location" />
        {this.renderPosted()}
        <Button onPress={() => { this.handleGetLocations(); }} title="Get Locations" />
        {this.renderLocations()}
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
