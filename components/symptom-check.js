/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, AsyncStorage,
} from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { updateUser } from '../services/api';
// import { connect } from 'react-redux';
// import { CheckBox } from 'react-native-elements';
// import { logSymptoms } from '../services/api';

class SymptomCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
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
    this.fetchCurrentStatus();
  }

  fetchCurrentStatus = () => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const user = JSON.parse(result);
          const { symptoms, id } = user;
          // eslint-disable-next-line object-curly-newline
          this.setState({ symptoms, id });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onhandleChange = (event) => {
    console.log('event', event);
    const { name } = event;
    this.setState((prevState) => ({ checkedItems: prevState.checkedItems.set(name, event.value) }));
  }

  submit = () => {
    const { symptoms, id } = this.state;
    updateUser(id, { symptoms });
    this.props.closeModal();
  }

  render() {
    const { persistantCough, shortnessOfBreath, hasFever, hasChills, musclePain, soreThroat, lossOfTaste, lossOfSmell } = this.state.symptoms;
    return (
      <View>
        <CheckBox
          title="Persistant Cough"
          name="persistantCough"
          checked={persistantCough}
          onPress={() => this.setState((prevState) => {
            const symptoms = { ...prevState.symptoms };
            symptoms.persistantCough = !symptoms.persistantCough;
            return { symptoms };
          })}
        />
        <CheckBox
          title="Shortness of Breath"
          name="shortnessOfBreath"
          checked={shortnessOfBreath}
          onPress={() => this.setState((prevState) => {
            const symptoms = { ...prevState.symptoms };
            symptoms.shortnessOfBreath = !symptoms.shortnessOfBreath;
            return { symptoms };
          })}
        />
        <CheckBox
          title="Fever"
          name="hasFever"
          checked={hasFever}
          onPress={() => this.setState((prevState) => {
            const symptoms = { ...prevState.symptoms };
            symptoms.hasFever = !symptoms.hasFever;
            return { symptoms };
          })}
        />
        <CheckBox
          title="Chills"
          name="hasChills"
          checked={hasChills}
          onPress={() => this.setState((prevState) => {
            const symptoms = { ...prevState.symptoms };
            symptoms.hasChills = !symptoms.hasChills;
            return { symptoms };
          })}
        />
        <CheckBox
          title="Muscle Pain"
          name="musclePain"
          checked={musclePain}
          onPress={() => this.setState((prevState) => {
            const symptoms = { ...prevState.symptoms };
            symptoms.musclePain = !symptoms.musclePain;
            return { symptoms };
          })}
        />
        <CheckBox
          title="Sore Throat"
          name="soreThroat"
          checked={soreThroat}
          onPress={() => this.setState((prevState) => {
            const symptoms = { ...prevState.symptoms };
            symptoms.soreThroat = !symptoms.soreThroat;
            return { symptoms };
          })}
        />
        <CheckBox
          title="Loss of Taste"
          name="lossOfTaste"
          checked={lossOfTaste}
          onPress={() => this.setState((prevState) => {
            const symptoms = { ...prevState.symptoms };
            symptoms.lossOfTaste = !symptoms.lossOfTaste;
            return { symptoms };
          })}
        />
        <CheckBox
          title="Loss of Smell"
          name="lossOfSmell"
          checked={lossOfSmell}
          onPress={() => this.setState((prevState) => {
            const symptoms = { ...prevState.symptoms };
            symptoms.lossOfSmell = !symptoms.lossOfSmell;
            return { symptoms };
          })}
        />
        <Button
          type="outline"
          onPress={this.submit}
          title="Submit"
          color="#841584"
          accessibilityLabel="Submit symptoms"
        />
      </View>
    );
  }
}

// const mapStateToProps = (reduxState) => ({
//   symptoms: reduxState.symptoms.symptoms,
// });

// export default connect(mapStateToProps, null)(SymptomCheck);

export default SymptomCheck;
