/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity, Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/risk';

const riskObject = require('../lib/resources.json');

const riskInfo = riskObject.risk;

const headerText = 'Risk Assessment Details';

class RiskInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

    renderResource = (item) => {
      const { level, description } = item;
      return (
        <View style={styles.risk} key={level}>
          <Text style={styles.riskLevel}>
            {' '}
            Risk Level:
            {' '}
            {level}
            {' '}
          </Text>
          <Text>{description}</Text>
        </View>
      );
    };

    renderModal() {
      if (this.state.isModalVisible) {
        return (
          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.container}>
              <Ionicons name="chevron-left" onPress={() => { this.setState({ isModalVisible: false }); }} style={styles.backButton} />
              <Text>{headerText}</Text>
              <FlatList
                data={riskInfo}
                renderItem={({ item }) => { return this.renderResource(item); }}
                keyExtractor={(item) => item.level}
                contentContainerStyle={styles.container}
              />
            </View>
          </Modal>
        );
      } else {
        return (
          <TouchableOpacity onPress={() => { this.setState({ isModalVisible: true }); }}><Text>Learn More</Text></TouchableOpacity>
        );
      }
    }

    render() {
      return (
        <View>
          {this.renderModal()}
        </View>
      );
    }
}

export default RiskInfo;
