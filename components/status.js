/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, // Modal,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import { sendMessage } from '../services/api';
import UpdateModalContent from './status-update-modal';

const fromAuth = {
  covid: false,
  tested: false,
};

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covid: false,
      tested: false,
      modalIsVisible: false,
      edited: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    // this.props.navigation.setParams({
    //   toggleModalMenu: this.toggleModalMenu,
    // });
  }

  handleEditing() {
    if (this.state.covid !== fromAuth.covid || this.state.tested !== fromAuth.tested) {
      this.setState({ edited: true });
    } else {
      this.setState({ edited: false });
    }
  }

  closeModal() {
    console.log('we pop back out!');
    this.setState({ modalIsVisible: false });
  }

  getCovidValue(option) {
    console.log('in getCovidValue');
    console.log(option);
    // let { edited } = this.state;
    if (option === 'Positive') {
      // if (!edited && fromAuth.covid !== true) {
      //   edited = true;
      // }
      this.setState({ covid: true });
    } else {
      // if (!edited && fromAuth.covid !== false) {
      //   edited = true;
      // }
      this.setState({ covid: false });
    }
    this.handleEditing();
  }

  getTestedValue(option) {
    console.log('in getTestedValue');
    console.log(option);
    let { edited } = this.state;
    if (option === 'Tested') {
      console.log('option was tested');
      if (!edited && fromAuth.tested !== true) {
        edited = true;
      }
      this.setState({ tested: true, edited: fromAuth.tested !== true });
    } else {
      console.log('option was tested');
      if (!edited && fromAuth.tested !== false) {
        edited = true;
      }
      this.setState({ tested: false, edited: fromAuth.tested !== false });
    }
  }

  submit() {
    const { covid, tested } = this.state;
    const now = new Date();
    const message = {
      traceID: '', covid, tested, contactDate: now.getTime(),
    };
    // eslint-disable-next-line react/destructuring-assignment
    this.props.sendMessage(message);
    fromAuth.covid = covid;
    fromAuth.tested = tested;
    this.closeModal();
    this.handleEditing();
  }

  // toggleModalMenu() {
  //   console.log('toggling the modal menu ayo');
  //   // eslint-disable-next-line no-unused-expressions
  //   this.setState((prevState) => { !prevState.modalIsVisible; });
  // }

  renderSubmit() {
    if (this.state.edited) {
      return (
        <TouchableOpacity onPress={() => { this.setState({ modalIsVisible: true }); }}>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  renderModal() {
    console.log('in render modal');
    const { modalIsVisible } = this.state;
    if (modalIsVisible) {
      const original = { covid: fromAuth.covid, tested: fromAuth.tested };
      const update = { covid: this.state.covid, tested: this.state.tested };
      return (
        <Modal
          isVisible={modalIsVisible}
          onBackdropPress={this.closeModal} // Android back press
          onSwipeComplete={this.closeModal} // Swipe to discard
          animationIn="slideInRight" // Has others, we want slide in from the right
          animationOut="slideOutRight" // When discarding the drawer
          swipeDirection="right" // Discard the drawer with swipe to right
          useNativeDriver // Faster animation
          hideModalContentWhileAnimating // Better performance, try with/without
          propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        >
          <UpdateModalContent closeModal={this.closeModal} submit={this.submit} original={original} update={update} />
        </Modal>
      );
    } else {
      return null;
    }
  }

  render() {
    console.log('state:', this.state);
    console.log('fromAuth:', fromAuth);
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
    console.log('show modal?', this.state.modalIsVisible);
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
            data={covidOptions}
            style={styles.dropdown}
            value="Negative"
            onChangeText={(value) => { this.getCovidValue(value); }}
          />
        </View>
        <View style={styles.field}>
          <Text>
            Testing Status
          </Text>
          <Dropdown
            data={testedOptions}
            style={styles.dropdown}
            value="Untested"
            onChangeText={(value) => { this.getTestedValue(value); }}
          />
        </View>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Symptom Check'); }}>
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
        {this.renderModal()}
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

export default connect(null, { sendMessage })(Status);
