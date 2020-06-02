import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
// import { connect } from 'react-redux';
// import { CheckBox } from 'react-native-elements';
// import { logSymptoms } from '../services/api';

class SymptomCheck extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Welcome to symptoms check woo</Text>
        <TouchableOpacity onPress={() => { navigation.pop(); }}>
          <Text>Take me back back back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// const mapStateToProps = (reduxState) => ({
//   symptoms: reduxState.symptoms.symptoms,
// });

// export default connect(mapStateToProps, null)(SymptomCheck);

export default SymptomCheck;
