import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import MapTab from './map_tab';
// import RiskTab from './risk_tab';
import AlertTab from './alert_tab';
import StatusTab from './status_tab';
import InfoTab from './info_tab';


const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
  // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Map') {
            iconName = 'map';
          }
          if (route.name === 'Risk') {
            iconName = 'tachometer';
          }
          if (route.name === 'Alerts') {
            iconName = 'envelope';
          }
          if (route.name === 'Status') {
            iconName = 'thermometer-three-quarters';
          }
          if (route.name === 'Info') {
            iconName = 'info-circle';
          }
          return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
        },
      })}
    >
      <Tab.Screen name="Map" component={MapTab} />
      {/* <Tab.Screen name="Risk" component={RiskTab} /> */}
      <Tab.Screen name="Alerts" component={AlertTab} />
      <Tab.Screen name="Status" component={StatusTab} />
      <Tab.Screen name="Info" component={InfoTab} />
      {/* <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} /> */}
    </Tab.Navigator>
  // </NavigationContainer>
  );
};

export default MainTabBar;
