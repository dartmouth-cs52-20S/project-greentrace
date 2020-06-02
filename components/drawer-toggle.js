import React from 'react';
import {
  TouchableOpacity, StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const Toggle = (props) => {
  return (
    <TouchableOpacity style={styles.hamburger} onPress={() => props.navigation.toggleDrawer()}>
      <Ionicons name="bars" size={26} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hamburger: {
    alignSelf: 'flex-end',
    padding: 0,
    marginRight: 50,
    marginTop: 50,
  },
});

export default Toggle;
