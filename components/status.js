/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, AsyncStorage, // Modal,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import SymptomCheck from './symptom-check';
import { updateUser } from '../services/api';
import UpdateModalContent from './status-update-modal';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: {},
      covid: 'Negative',
      tested: 'Untested',
      confirmModal: false,
      symptomModal: false,
      edited: false,
      id: null,
    };
    this.fetchCurrentStatus();
  }

  componentDidMount() {
  }

  fetchCurrentStatus = () => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const user = JSON.parse(result);
          console.log('Getting curr user', result);
          const prev = {};
          const { covid, tested, id } = user;
          if (covid) {
            prev.covid = 'Positive';
          } else {
            prev.covid = 'Negative';
          }
          if (tested) {
            prev.tested = 'Tested';
          } else {
            prev.tested = 'Untested';
          }
          // eslint-disable-next-line object-curly-newline
          this.setState({ prev, covid: prev.covid, tested: prev.tested, id });
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
      this.setState({ covid: event, edited: true });
    }
    if (event === 'Tested' || event === 'Untested') {
      this.setState({ tested: event, edited: true });
    }
  }

  submit = () => {
    const { covid, tested, id } = this.state;
    updateUser(id, { covid: (covid === 'Positive'), tested: (tested === 'Tested') });
    this.closeConfirmModal();
    this.setState({ edited: false });
  }

  renderSubmit() {
    if (this.state.edited) {
      return (
        <TouchableOpacity onPress={() => { this.setState({ confirmModal: true }); }}>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  renderConfirmModal() {
    console.log('in render modal');
    const { confirmModal } = this.state;
    if (confirmModal) {
      const original = { covid: this.state.prev.covid, tested: this.state.prev.tested };
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
    console.log('state:', this.state);
    console.log('navigation', this.props.navigation);
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
    // eslint-disable-next-line react/destructuring-assignment
    console.log('show modal?', this.state.confirmModal);
    console.log('edited?', this.state.edited);
    console.log('covid?', this.state.covid);
    console.log('tested?', this.state.tested);

    return (
      <View style={styles.container}>
        <View style={styles.field}>
          <Text>
            COVID-19 Status
          </Text>
          <Dropdown
            name="covid"
            data={covidOptions}
            style={styles.dropdown}
            value={this.state.covid}
            onChangeText={this.onHandleChange}
          />
        </View>
        <View style={styles.field}>
          <Text>
            Testing Status
          </Text>
          <Dropdown
            name="tested"
            data={testedOptions}
            style={styles.dropdown}
            value={this.state.tested}
            onChangeText={this.onHandleChange}
          />
        </View>
        <TouchableOpacity onPress={() => { this.setState({ symptomModal: true }); }}>
          <Text>Check Symptoms</Text>
        </TouchableOpacity>
        {this.renderSubmit()}
        {/* <TouchableOpacity onPress={() => {
          console.log('pressed button yay');
          this.setState({ modalIsVisible: true });
        }}
        >
          <Text>
            Render Modal
          </Text>
        </TouchableOpacity> */}
        {this.renderSymptomModal()}
        {this.renderConfirmModal()}
      </View>
      // </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  dropdown: {
    width: 250,
  },
  field: {
    width: 200,
  },
  hamburger: {
    alignSelf: 'flex-end',
    padding: 0,
    marginRight: 50,
    marginTop: 50,
  },
});

// const mapStateToProps = (reduxState) => ({
//   covid: reduxState.user.covid,
//   tested: reduxState.user.tested,
// });

export default connect(null, { updateUser })(Status);
