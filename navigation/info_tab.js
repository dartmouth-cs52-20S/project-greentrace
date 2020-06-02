import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Information from '../components/information';
// import AccountInformation from '../components/account-info';
// import PrivacyInformation from '../components/privacy-info';
// import Resources from '../components/resources';

const Stack = createStackNavigator();

const InfoTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Information"
        component={Information}
      />
      {/* <Stack.Screen
        name="Account"
        component={AccountInformation}
      />
      <Stack.Screen
        name="Privacy"
        component={PrivacyInformation}
      />
      <Stack.Screen
        name="Resources"
        component={Resources}
      /> */}
    </Stack.Navigator>
  );
};

export default InfoTab;
