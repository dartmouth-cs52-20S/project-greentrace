import React from 'react';
// import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

import Alerts from '../components/alerts';
import AlertsDetail from '../components/alerts-detail';

// const AlertTab = createStackNavigator({
//   Home: Alerts,
//   Alerts: {
//     screen: Alerts,
//   },
//   Alert: {
//     screen: AlertsDetail,
//   },
// });
// // Stack.navigationOptions = { tabBarVisible: false };
// AlertTab.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible,
//   };
// };

/*
options={{
          title: 'Alerts',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
        }}
*/
// const AlertTab = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Alerts"
//         component={Alerts}
//         options={Alerts.navigationOptions}
//       />
//       <Stack.Screen
//         name="AlertsDetail"
//         component={AlertsDetail}
//         options={{
//           title: 'Alerts',
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
const Stack = createStackNavigator();
// Stack.navigationOptions = { tabBarVisible: false };
Stack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

/*
options={{
          title: 'Alerts',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
        }}
*/
const AlertTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Alerts"
        component={Alerts}
        options={Alerts.navigationOptions}
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
