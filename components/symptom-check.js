/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, AsyncStorage, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { updateUser } from '../services/api';
import styles from '../styles/symptomcheck';

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
      symptomLabels: {
        persistantCough: 'Persistent Cough',
        shortnessOfBreath: 'Shortness of Breath',
        hasFever: 'Fever',
        hasChills: 'Chills',
        musclePain: 'Muscle Pain',
        soreThroat: 'Sore Throat',
        lossOfTaste: 'Loss of Taste',
        lossOfSmell: 'Loss of smell',
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
    const { name } = event;
    this.setState((prevState) => ({ checkedItems: prevState.checkedItems.set(name, event.value) }));
  }

  submit = () => {
    const { symptoms, id } = this.state;
    updateUser(id, { symptoms });
    this.props.closeModal();
  }

  renderSymptom(symptom) {
    const { symptomLabels, symptoms } = this.state;
    const symptomCopy = symptoms;
    return (
      <CheckBox
        title={symptomLabels[symptom]}
        name={symptom}
        checked={symptomCopy[symptom]}
        onPress={() => this.setState((prevState) => {
          // eslint-disable-next-line no-shadow
          const symptoms = { ...prevState.symptoms };
          symptoms[symptom] = !symptoms[symptom];
          return { symptoms };
        })}
        checkedColor="#28AC45"
      />
    );
  }

  render() {
    const { symptoms } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
            // eslint-disable-next-line react/destructuring-assignment
          data={Object.keys(symptoms)}
          renderItem={({ item }) => { return this.renderSymptom(item); }}
          keyExtractor={(item) => item.timestamp}
          style={{ flex: 1 }}
        />
        <TouchableOpacity style={styles.button} onPress={() => { this.submit(); }}>
          <Text>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SymptomCheck;
