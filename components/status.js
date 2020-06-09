/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, AsyncStorage,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import SymptomCheck from './symptom-check';
import { updateUser } from '../services/api';
import UpdateModalContent from './status-update-modal';
import MapBackground from './map-background';
import styles from '../styles/status';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevCovid: 'Negative',
      prevTested: 'Untested',
      covid: 'Negative',
      tested: 'Untested',
      confirmModal: false,
      symptomModal: false,
      id: null,
    };
  }

  componentDidMount() {
    this.fetchCurrentStatus();
  }

  fetchCurrentStatus = () => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const user = JSON.parse(result);
          let prevCovid = '';
          let prevTested = '';
          const { covid, tested, id } = user;
          if (covid) {
            prevCovid = 'Positive';
          } else {
            prevCovid = 'Negative';
          }
          if (tested) {
            prevTested = 'Tested';
          } else {
            prevTested = 'Untested';
          }
          // eslint-disable-next-line object-curly-newline
          this.setState({
            prevCovid, prevTested, covid: prevCovid, tested: prevTested, id,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  closeConfirmModal = () => {
    this.setState({ confirmModal: false });
  }

  closeSymptomModal = () => {
    this.setState({ symptomModal: false });
  }

  onHandleChange = (event) => {
    if (event === 'Positive' || event === 'Negative') {
      this.setState({ covid: event });
    }
    if (event === 'Tested' || event === 'Untested') {
      this.setState({ tested: event });
    }
  }

  submit = () => {
    const { covid, tested, id } = this.state;
    updateUser(id, { covid: (covid === 'Positive'), tested: (tested === 'Tested') });
    this.closeConfirmModal();
  }

  renderSubmit() {
    return (
      <TouchableOpacity style={styles.actionButton} onPress={() => { this.setState({ confirmModal: true }); }}>
        <Text style={styles.buttonText}>
          Submit
        </Text>
      </TouchableOpacity>
    );
  }

  renderConfirmModal() {
    const { confirmModal } = this.state;
    if (confirmModal) {
      const original = { covid: this.state.prevCovid, tested: this.state.prevTested };
      const update = { covid: this.state.covid, tested: this.state.tested };
      return (
        <Modal
          isVisible={confirmModal}
          onBackdropPress={this.closeConfirmModal} // Android back press
          onSwipeComplete={this.closeConfirmModal} // Swipe to discard
          animationIn="slideInRight" // Has others, we want slide in from the right
          animationOut="slideOutRight" // When discarding the drawer
          swipeDirection="right" // Discard the drawer with swipe to right
          useNativeDriver // Faster animation
          hideModalContentWhileAnimating // Better performance, try with/without
          propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        >
          <UpdateModalContent closeModal={this.closeConfirmModal} submit={this.submit} original={original} update={update} />
        </Modal>
      );
    } else {
      return null;
    }
  }

  renderSymptomModal() {
    const { symptomModal } = this.state;
    if (symptomModal) {
      return (
        <Modal
          isVisible={symptomModal}
          onBackdropPress={this.closeSymptomModal} // Android back press
          onSwipeComplete={this.closeSymptomModal} // Swipe to discard
          animationIn="slideInRight" // Has others, we want slide in from the right
          animationOut="slideOutRight" // When discarding the drawer
          swipeDirection="right" // Discard the drawer with swipe to right
          useNativeDriver // Faster animation
          hideModalContentWhileAnimating // Better performance, try with/without
          propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        >
          <SymptomCheck closeModal={this.closeSymptomModal} />
        </Modal>
      );
    } else {
      return null;
    }
  }

  render() {
    const covidOptions = [
      {
        value: 'Positive',
      },
      {
        value: 'Negative',
      },
    ];
    const testedOptions = [
      {
        value: 'Tested',
      },
      {
        value: 'Untested',
      },
    ];
    const dropdownOverlayStyles = {
      alignSelf: 'center',
    };
    const dropdownOffset = {
      top: 0,
      left: 0,
    };

    return (
      <MapBackground>
        <View style={styles.container}>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>
              COVID-19 Status
            </Text>
            <Dropdown
              name="covid"
              data={covidOptions}
              style={styles.dropdown}
              value={this.state.covid}
              onChangeText={this.onHandleChange}
              dropdownOffset={dropdownOffset}
              overlayStyle={dropdownOverlayStyles}
              containerStyle={styles.dropdownContainer}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>
              Testing Status
            </Text>
            <Dropdown
              name="tested"
              data={testedOptions}
              style={styles.dropdown}
              value={this.state.tested}
              onChangeText={this.onHandleChange}
              dropdownOffset={dropdownOffset}
              overlayStyle={dropdownOverlayStyles}
              containerStyle={styles.dropdownContainer}
            />
          </View>
          <TouchableOpacity style={styles.actionButtonCheckSymptom} onPress={() => { this.setState({ symptomModal: true }); }}>
            <Text style={styles.buttonTextCheckSymptoms}>Check Symptoms</Text>
          </TouchableOpacity>
          {this.renderSubmit()}
          {this.renderSymptomModal()}
          {this.renderConfirmModal()}
        </View>
      </MapBackground>
    );
  }
}

export default connect(null, { updateUser })(Status);
