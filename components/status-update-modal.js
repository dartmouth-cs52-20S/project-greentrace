/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

const UpdateModalContent = (props) => {
  const { original, update } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text>Current Status</Text>
        <Text>{original.covid}</Text>
        <Text>{original.tested}</Text>
      </View>
      <View>
        <Text>Updated Status</Text>
        <Text>{update.covid}</Text>
        <Text>{update.tested}</Text>
      </View>
      <TouchableOpacity onPress={() => { props.submit(); }}>
        <Text>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.closeModal(); }}>
        <Text>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 20,
  },
});

// export default UpdateModalContent;
export default connect(null, null)(UpdateModalContent);
