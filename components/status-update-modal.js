/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import styles from '../styles/modal';
// import { connect } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

const UpdateModalContent = (props) => {
  const { original, update } = props;


  return (
    <View style={styles.confirmContainer}>
      <Text style={styles.confirmTitle}>Update Status</Text>
      <View style={styles.confirmStatus}>
        <Text style={styles.confirmStatusTitle}>Current Status</Text>
        <View style={styles.confirmStatusInfo}>
          <Text style={styles.statusContentText}>{original.covid}</Text>
          <Text style={styles.statusContentText}>{original.tested}</Text>
        </View>
      </View>
      <View style={styles.confirmStatus}>
        <Text style={styles.confirmStatusTitle}>Updated Status</Text>
        <View style={styles.confirmStatusInfo}>
          <Text style={styles.statusContentText}>{update.covid}</Text>
          <Text style={styles.statusContentText}>{update.tested}</Text>
        </View>
      </View>
      <View style={styles.confirmButtons}>
        <TouchableOpacity style={styles.confirmButton} onPress={() => { props.submit(); }}>
          <Text style={styles.confirmCancelText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => { props.closeModal(); }}>
          <Text style={styles.confirmCancelText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateModalContent;
// export default connect(null, null)(UpdateModalContent);
