/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import { sendMessage } from '../services/api';

const UpdateModalContent = (props) => {
  const { original, update } = props;
  console.log('update modal content props');
  console.log(props);

  const stringifyCovidStatus = (covid) => {
    if (covid === true) {
      return 'Positive';
    } else {
      return 'Negative';
    }
  };

  const stringifyTestingStatus = (tested) => {
    if (tested === true) {
      return 'Tested';
    } else {
      return 'Untested';
    }
  };

  return (
    <View style={styles.container}>
      <Text>Update Status</Text>
      <View>
        <Text>Current Status</Text>
        <Text>{stringifyCovidStatus(original.covid)}</Text>
        <Text>{stringifyTestingStatus(original.tested)}</Text>
      </View>
      <View>
        <Text>Updated Status</Text>
        <Text>{stringifyCovidStatus(update.covid)}</Text>
        <Text>{stringifyTestingStatus(update.tested)}</Text>
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
export default connect(null, { sendMessage })(UpdateModalContent);
