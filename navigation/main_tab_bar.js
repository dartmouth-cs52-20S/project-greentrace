import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
// import Map from '../components/map';
import HeatMap from '../components/HeatMap';
import Risk from '../components/risk';
import Alerts from '../components/alerts';
import Status from '../components/status';
import SignIn from '../components/signin';
import SignUp from '../components/signup';


const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Map"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Map') {
              iconName = 'map';
            }
            if (route.name === 'Alerts') {
              iconName = 'notifications';
            }
            if (route.name === 'Profile') {
              iconName = 'send';
            }
            return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
          },
        })}
      >
        <Tab.Screen name="Map" component={HeatMap} />
        <Tab.Screen name="Risk" component={Risk} />
        <Tab.Screen name="Alerts" component={Alerts} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;
