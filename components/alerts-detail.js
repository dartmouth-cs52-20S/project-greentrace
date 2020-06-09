import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import MapBackground from './map-background';
import styles from '../styles/alerts';
import Resources from './resources';

class AlertsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  renderModal() {
    const { isModalVisible } = this.state;
    return (
      <Modal isVisible={isModalVisible}>
        <Ionicons name="times" onPress={() => { this.setState({ isModalVisible: false }); }} style={styles.backButtonResources} />
        <Text> For more information, please refer to our resource guide </Text>
        <Resources />
      </Modal>
    );
  }

  render() {
    const { currentMessage, messages, navigation } = this.props;
    let clickedMessage = null;
    messages.forEach((msg) => {
      if (msg.id === currentMessage) clickedMessage = msg;
    });
    const {
      contactDate,
    } = clickedMessage;
    const contactDateString = new Date(contactDate).toString().substring(0, 15);

    const notification = `A student you were last in contact with on ${contactDateString} has been tested and diagnosed as positive for COVID-19.`;
    const recommendation = 'We recommend checking your symptoms and scheduling an appointment to get tested at Dick’s House or DHMC.';

    return (
      <MapBackground>
        <View style={styles.detailContainer}>
          <View style={styles.dateStyle}>
            <Ionicons name="angle-left" onPress={() => { navigation.navigate('Alerts'); }} style={styles.backButton} />
            <Text style={styles.detailDate}>{contactDateString}</Text>
          </View>
          <Ionicons name="warning" style={styles.detailIcon} />
          <Text style={styles.detailInformation}>{notification}</Text>
          <Text style={styles.detailInformation}>{recommendation}</Text>
          <TouchableOpacity onPress={() => { this.setState({ isModalVisible: true }); }}><Text style={styles.resourcesText}>Resources</Text></TouchableOpacity>
          {this.renderModal()}
        </View>
      </MapBackground>

    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    currentMessage: reduxState.messages.currMessage,
    messages: reduxState.messages.messages,
  };
};

export default connect(mapStateToProps, null)(AlertsDetail);
