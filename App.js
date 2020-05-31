/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// import { View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import MainTabBar from './navigation/main_tab_bar';
import LocationTracking from './components/Location';

// disable really annoying in app warnings
console.disableYellowBox = true;

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
));


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <LocationTracking />
        <MainTabBar />
      </Provider>
    );
  }
}

export default App;
