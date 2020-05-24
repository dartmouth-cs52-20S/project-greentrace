import React from 'react';
// import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

import Alerts from '../components/alerts';
import AlertsDetail from '../components/alerts_detail';

// const TempSearch = (props) => (<Button onPress={() => { props.navigation.navigate('Detail'); }} title="next" />);
// const TempDetail = (props) => (<Button onPress={() => { props.navigation.pop(); }} title="close" />);

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const AlertTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Alerts"
        component={Alerts}
        options={{
          title: 'Alerts',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="AlertsDetail"
        component={AlertsDetail}
        options={{
          title: 'Alerts',
        }}
      />
    </Stack.Navigator>
  );
};

export default AlertTab;
