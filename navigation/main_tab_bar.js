import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
// import Map from '../components/map';
<<<<<<< HEAD
// import HeatMap from '../components/HeatMap';
import MapTab from './map_tab';
import RiskTab from './risk_tab';
import AlertTab from './alert_tab';
=======
import HeatMap from '../components/HeatMap';
import Risk from '../components/risk';
import Alerts from '../components/alerts';
>>>>>>> ee97bcec0f84acb7d1a480f45e79da2b3de3e613
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
            if (route.name === 'Risk') {
              iconName = 'tachometer';
            }
            if (route.name === 'Alerts') {
              iconName = 'envelope';
            }
            if (route.name === 'Status') {
              iconName = 'thermometer-three-quarters';
            }
            return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
          },
        })}
      >
<<<<<<< HEAD
        <Tab.Screen name="Map" component={MapTab} />
        {/* <Tab.Screen name="Map2" component={Map} /> */}
        <Tab.Screen name="Risk" component={RiskTab} />
        <Tab.Screen name="Alerts" component={AlertTab} />
=======
        <Tab.Screen name="Map" component={HeatMap} />
        <Tab.Screen name="Risk" component={Risk} />
        <Tab.Screen name="Alerts" component={Alerts} />
>>>>>>> ee97bcec0f84acb7d1a480f45e79da2b3de3e613
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;
