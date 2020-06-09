/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import {
  ImageBackground, StyleSheet, Dimensions, AsyncStorage,
} from 'react-native';
import { STATIC_MAP_API_KEY } from 'react-native-dotenv';

const ROOT_URL = 'https://maps.googleapis.com/maps/api/staticmap?';

class MapBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 43.7044,
        longitude: -72.2887,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('currlocation')
      .then((result) => {
        if (result !== null) {
          const location = JSON.parse(result);
          this.setState({ location });
        }
      })
      .catch((err) => {
        const location = {
          latitude: 43.7044,
          longitude: -72.2887,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        };
        this.setState({ location });
      });
  }

  render() {
    const { children } = this.props;
    const { location } = this.state;
    const { latitude, longitude } = location;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
      <ImageBackground source={{ uri: `${ROOT_URL}center=${latitude},${longitude}&zoom=14&size=${width}x${height}&maptype=satellite&key=${STATIC_MAP_API_KEY}` }} style={styles.image}>
        {children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapBackground;
