import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { connect } from 'react-redux';
import { getLocations, sendLocation } from '../services/api';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      // locations: '',
      // postResponse: '',
    };
  }

  handleSendLocation = () => {
    const { latitude, longitude } = this.state;
    // eslint-disable-next-line no-shadow
    const { sendLocation } = this.props;
    sendLocation({ latitude, longitude })
      .then((response) => {
        console.log('in handleSendLocation');
        console.log(response);
        // this.setState({ postResponse: response });
      })
      .catch((error) => {
        console.log('error in send boo');
        console.log(error);
      });
  }

  handleGetLocations = () => {
    // eslint-disable-next-line no-shadow
    const { getLocations } = this.props;
    getLocations()
      .then((locations) => {
        console.log(locations);
        // this.setState({ locations });
      })
      .catch((error) => {
        console.log('error in get boooo');
        console.log(error);
      });
  }

  renderLocations = () => {
    const { locations } = this.props;
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
    const { locations } = this.props;
    if (locations !== '') {
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

  render() {
    console.log(this.props);
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

const mapStateToProps = (state) => ({
  locations: state.locs.locations,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, { getLocations, sendLocation })(Map);
