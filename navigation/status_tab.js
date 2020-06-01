import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountInformation from '../components/account-info';
import PrivacyInformation from '../components/privacy-info';
import Status from '../components/status';
import Resources from '../components/resources';

const Drawer = createDrawerNavigator();
// Drawer.navigationObjects = { tabBarVisible: false };
// Drawer.navigationOptions = ({ navigation }) => {
//   // let tabBarVisible = true;
//   // if (navigation.state.index > 0) {
//   //   tabBarVisible = false;
//   // }
//   // return {
//   //   tabBarVisible,
//   // };
//   const tabBarVisible = false;
//   return { tabBarVisible };
// };

// nest drawer to handle four internal views
// "name" prop is the name of the route
const StatusTab = () => {
  console.log('in status tab');
  console.log(Drawer);
  return (
    <Drawer.Navigator
      drawerPosition="right"
    >
      <Drawer.Screen
        name="Status"
        component={Status}
        options={Status.navigationOptions}
      />
      <Drawer.Screen
        name="Account"
        component={AccountInformation}
      />
      <Drawer.Screen
        name="Privacy"
        component={PrivacyInformation}
      />
      <Drawer.Screen
        name="Resources"
        component={Resources}
      />
    </Drawer.Navigator>
  );
};

export default StatusTab;
