/* eslint-disable prefer-destructuring */
import React from 'react';
import {
  ImageBackground, StyleSheet, Dimensions, AsyncStorage,
} from 'react-native';

const ROOT_URL = 'https://maps.googleapis.com/maps/api/staticmap?';
const API_KEY = 'AIzaSyDRuuhosfoCgLG2yRAGekZl7GlWVSmySmk';

class MapBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 43.704441,
        longitude: -72.288696,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    };
  }

  render() {
    const { children } = this.props;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
      <ImageBackground source={{ uri: `${ROOT_URL}center=40.714728,-73.998672&zoom=12&size=${width}x${height}&maptype=satellite&key=${API_KEY}` }} style={styles.image}>
        {children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {

  },
});

export default MapBackground;
