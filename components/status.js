import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import { sendMessage } from '../services/api';
// import InfoModal from './general-info-modal';
import Toggle from './drawer-toggle';

class Status extends Component {
  // static navigationOptions = {
  //   title: 'Status',
  //   headerStyle: {
  //     backgroundColor: 'green',
  //   },
  //   headerTintColor: '#fff',
  //   headerLeft: () => (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title="Info"
  //       color="#fff"
  //     />
  //   ),
  // };

  constructor(props) {
    super(props);
    this.state = {
      covid: false,
      tested: false,
      modalIsVisible: false,
      // edited: false,
    };
  }

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => setCount(c => c + 1)} title="Update count" />
  //     ),
  //   });
  // }, [navigation, setCount]);

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.navigation.setParams({
      toggleModalMenu: this.toggleModalMenu,
    });
  }

  getCovidValue(option) {
    console.log(option);
    if (option === 'Positive') {
      this.setState({ covid: true });
    } else {
      this.setState({ covid: false });
    }
  }

  getTestedValue(option) {
    console.log(option);
    if (option === 'Tested') {
      console.log('option was tested');
      this.setState({ tested: true });
    } else {
      console.log('option was tested');
      this.setState({ tested: false });
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
  }

  toggleModalMenu() {
    console.log('toggling the modal menu ayo');
    // eslint-disable-next-line no-unused-expressions
    this.setState((prevState) => { !prevState.modalIsVisible; });
  }

  render() {
    const { navigation } = this.props;
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

    return (
      <View style={styles.container}>
        <Toggle navigation={navigation} />
        <View style={styles.field}>
          <Text>
            COVID-19 Status
          </Text>
          <Dropdown
            data={covidOptions}
            style={styles.dropdown}
            value="Negative"
            onChangeText={() => { this.getCovidValue(); }}
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
            onChangeText={() => { this.getTestedValue(); }}
          />
        </View>
        <TouchableOpacity onPress={() => { this.submit(); }}>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>
        {/* <Modal
          isVisible={this.state.modalIsVisible}
          onBackdropPress={this.toggleModalMenu} // Android back press
          onSwipeComplete={this.toggleModalMenu} // Swipe to discard
          animationIn="slideInRight" // Has others, we want slide in from the right
          animationOut="slideOutRight" // When discarding the drawer
          swipeDirection="right" // Discard the drawer with swipe to right
          useNativeDriver // Faster animation
          hideModalContentWhileAnimating // Better performance, try with/without
          propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
          style={styles.sideMenuStyle}
        >
          <InfoModal callParentScreenFunction={this.callParentScreenFunction} />
        </Modal> */}
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


export default connect(null, { sendMessage })(Status);
