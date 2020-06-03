/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-curly-newline */
import React from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, AsyncStorage } from 'react-native';
import { getHeatpmap } from '../services/api';

class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
      heatmap: [],
    };
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        };
        this.setState({
          region,
        });
        const heatmap = getHeatpmap();
        this.setState({ heatmap });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }

  goToInitialLocation = () => {
    AsyncStorage.getItem('currlocation')
      .then((result) => {
        if (result !== null) {
          const region = JSON.parse(result);
          // console.log('Changing map region to', region);
          this.setState({ region });
          this.mapView.animateToRegion(region);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
          followUserLocation
          ref={(ref) => (this.mapView = ref)}
          zoomEnabled
          showsUserLocation
          region={this.state.region}
          onUserLocationChange={this.goToInitialLocation}
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          mapType="satellite"
        >
          <MapView.Heatmap points={this.state.heatmap}
            opacity={1}
            radius={20}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const mapStateToProps = (state) => ({
  locations: state.locs.locations,
});

export default connect(mapStateToProps, null)(HeatMap);
