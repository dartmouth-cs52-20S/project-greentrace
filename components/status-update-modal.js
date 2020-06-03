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
      <Text style={styles.title}>Update Status</Text>
      <View style={styles.status}>
        <Text style={styles.statusTitle}>Current Status</Text>
        <View style={styles.statusInfo}>
          <Text>{stringifyCovidStatus(original.covid)}</Text>
          <Text>{stringifyTestingStatus(original.tested)}</Text>
        </View>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusTitle}>Updated Status</Text>
        <View style={styles.statusInfo}>
          <Text>{stringifyCovidStatus(update.covid)}</Text>
          <Text>{stringifyTestingStatus(update.tested)}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => { props.submit(); }}>
          <Text>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { props.closeModal(); }}>
          <Text>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 30,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    width: 300,
    maxHeight: 350,
  },
  status: {
    marginVertical: 10,
  },
  statusTitle: {
    fontSize: 15,
    textAlign: 'center',
  },
  statusInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});

// export default UpdateModalContent;
export default connect(null, { sendMessage })(UpdateModalContent);
