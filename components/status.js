import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
import { sendMessage } from '../services/api';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covid: false,
      tested: false,
    };
  }

  componentDidMount() {
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

    return (
      <View style={styles.container}>
        <View style={styles.field}>
          <Text>
            COVID-19 Status
          </Text>
          <Dropdown
            // label="COVID-19 Status"
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
            // label="Testing Status"
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  dropdown: {
    width: 250,
  },
  field: {
    width: 200,
  },
});

export default connect(null, { sendMessage })(Status);
