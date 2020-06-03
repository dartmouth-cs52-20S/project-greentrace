import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, AsyncStorage,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
// import { connect } from 'react-redux';
// import { CheckBox } from 'react-native-elements';
// import { logSymptoms } from '../services/api';

class SymptomCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: {
        persistantCough: false,
        shortnessOfBreath: false,
        hasFever: false,
        hasChills: false,
        musclePain: false,
        soreThroat: false,
        lossOfTaste: false,
        lossOfSmell: false,
      },
    };
  }

  fetchCurrentStatus = () => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const user = JSON.parse(result);
          const { symptoms } = user;
          // eslint-disable-next-line object-curly-newline
          this.setState({ symptoms });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const {persistantCough, shortnessOfBreath, hasFever, hasChills, musclePain, soreThroat, lossOfTaste, lossOfSmell} = this.state.symptoms;
    const { navigation } = this.props;
    return (
      <View>
        <CheckBox
          title="Persistant Cough"
          checked={persistantCough}
        />
        <CheckBox
          title="Shortness of Breath"
          checked={shortnessOfBreath}
        />
        <CheckBox
          title="Fever"
          checked={hasFever}
        />
        <CheckBox
          title="Chills"
          checked={hasChills}
        />
        <CheckBox
          title="Muscle Pain"
          checked={musclePain}
        />
        <CheckBox
          title="Sore Throat"
          checked={soreThroat}
        />
        <CheckBox
          title="Loss of Taste"
          checked={lossOfTaste}
        />
        <CheckBox
          title="Loss of Smell"
          checked={lossOfSmell}
        />
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
