import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import MainTabBar from './navigation/main_tab_bar';

// disable really annoying in app warnings
console.disableYellowBox = true;

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
));

const App = (props) => {
  return (
    <Provider store={store}>
      <MainTabBar />
    </Provider>
  );
};


export default App;
