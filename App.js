/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import * as Location from 'expo-location';
import {
  View, Button, Linking, Platform, AppState,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import Modal from 'react-native-modal';
// import * as api from './services/api';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import MainTabBar from './navigation/main_tab_bar';


// disable really annoying in app warnings
console.disableYellowBox = true;
const LOCATION_TASK_NAME = 'background-location-task';

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      isLocationModalVisible: false,
      appState: AppState.currentState,
    };
  }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount = () => {
      AppState.addEventListener('change', this.handleAppStateChange);
      this.getLocationAsynch();
    }

    componentDidMount = async () => {
      // await AsyncStorage.setItem('currentUser', JSON.stringify(this.props.currentUser));
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.High,
      });
    }

    componentWillUnmount() {
      AppState.removeEventListener('change', this.handleAppStateChange);
    }

    getLocationAsynch = async () => {
      try {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location denied',
          });
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
      } catch (error) {
        const status = Location.getProviderStatusAsync();
        if (!(await status).locationServicesEnabled) {
          this.setState({ isLocationModalVisible: true });
        }
      }
    }

    // static getCurrentUser = async () => {
    //   // const currentUser = AsyncStorage.get('currentUser');
    //   // return JSON.parse(currentUser);
    // }

  handlePress = (event) => {
    event.preventDefault();
    this.setState({ isLocationModalVisible: false, openSettings: true });
  }

  handleModalHide = (event) => {
    event.preventDefault();
    if (this.state.openSettings) {
      this.openSettings();
    } else {
      this.setState({ openSettings: undefined });
    }
  }

  handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|backgrond/) && nextAppState === 'active') {
      this.getLocationAsynch();
    }
  }

  openSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      console.log('Initial testing on IOS only');
    }
    this.setState({ openSettings: false });
  }


  render() {
    let text = 'Waiting...';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
      console.log(text);
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      const { latitude, longitude } = this.state.location.coords;
      console.log(text);
      console.log('latitude: ', latitude);
      console.log('longitude: ', longitude);
    }
    return (
      <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Modal isVisible={this.state.isLocationModalVisible} onModalHide={this.openSettings}>
          <View style={{
            height: 300, width: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <Button onPress={this.handlePress} />
          </View>
        </Modal>
        <MainTabBar />
      </View>
      </Provider>
    );
  }
}


// const App = (props) => {
//   return <MainTabBar />;
// };

TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    console.log(error);
    return;
  }
  if (data) {
    const { locations } = data;
    // const { latitude } = locations[0].coords;
    // const { longitude } = locations[0].coords;
    // const { locationObject } = { longitude, latitude };
    // api.sendLocation(locationObject);
    console.log('Locations: ', locations);
    // const currentUser = await App.getCurrentUser();
    // Axios.post();
    console.log('lat', locations[0].coords.latitude);
  }
});


export default App;
