/* eslint-disable object-curly-newline */
import React from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

class HeatMap extends React.Component {
  render() {
    const points = [{ latitude: 6.83646681, longitude: 79.77121907, weight: 1 },
      { latitude: 6.82776681, longitude: 79.871319, weight: 1 },
      { latitude: 6.82176681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83176681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83976681, longitude: 79.861319, weight: 1 },
      { latitude: 6.83076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.82776681, longitude: 79.861319, weight: 1 },
      { latitude: 6.82076681, longitude: 79.871319, weight: 1 },
      { latitude: 6.82076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.81076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83276681, longitude: 79.869319, weight: 1 },
      { latitude: 6.81976681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.867319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.865319, weight: 1 },
      { latitude: 6.83646681, longitude: 79.77121907, weight: 1 },
      { latitude: 6.82776681, longitude: 79.871319, weight: 1 },
      { latitude: 6.82176681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83176681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83976681, longitude: 79.861319, weight: 1 },
      { latitude: 6.83076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.82776681, longitude: 79.861319, weight: 1 },
      { latitude: 6.82076681, longitude: 79.871319, weight: 1 },
      { latitude: 6.82076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.81076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83276681, longitude: 79.869319, weight: 1 },
      { latitude: 6.81976681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.867319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.865319, weight: 1 },
      { latitude: 6.84076681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83646681, longitude: 79.77121907, weight: 1 },
      { latitude: 6.82776681, longitude: 79.871319, weight: 1 },
      { latitude: 6.82176681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83176681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83976681, longitude: 79.861319, weight: 1 },
      { latitude: 6.83076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.82776681, longitude: 79.861319, weight: 1 },
      { latitude: 6.82076681, longitude: 79.871319, weight: 1 },
      { latitude: 6.82076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.81076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83276681, longitude: 79.869319, weight: 1 },
      { latitude: 6.81976681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.867319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.865319, weight: 1 },
      { latitude: 6.84076681, longitude: 79.871319, weight: 1 },
      { latitude: 6.841776681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83646681, longitude: 79.77121907, weight: 1 },
      { latitude: 6.82776681, longitude: 79.871319, weight: 1 },
      { latitude: 6.82176681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83176681, longitude: 79.871319, weight: 1 },
      { latitude: 6.83976681, longitude: 79.861319, weight: 1 },
      { latitude: 6.83076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.82776681, longitude: 79.861319, weight: 1 },
      { latitude: 6.82076681, longitude: 79.871319, weight: 1 },
      { latitude: 6.82076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.81076681, longitude: 79.861319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83276681, longitude: 79.869319, weight: 1 },
      { latitude: 6.81976681, longitude: 79.869319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.867319, weight: 1 },
      { latitude: 6.83776681, longitude: 79.865319, weight: 1 },
      { latitude: 6.84076681, longitude: 79.871319, weight: 1 },
      { latitude: 6.841776681, longitude: 79.869319, weight: 1 },
      { latitude: 6.84076681, longitude: 79.871319, weight: 1 },
    ];
    return (
      <View style={styles.container}>
        <MapView
          region={{
            latitude: 6.82646681,
            longitude: 79.87121907,
            latitudeDelta: 0.09,
            longitudeDelta: 0.0121,
          }}
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          mapType="satellite"
          showsUserLocation
        >
          <MapView.Heatmap points={points}
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
