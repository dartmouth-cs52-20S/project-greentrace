import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, AsyncStorage, StyleSheet,
} from 'react-native';

import AccountInformation from './account-info';
import PrivacyInformation from './privacy-info';
import Resources from './resources';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Account',
    };
    this.logout = this.logout.bind(this);
  }

  switchView(title) {
    this.setState({ current: title });
  }

  logout() {
    const { navigation } = this.props;
    AsyncStorage.clear();
    navigation.navigate('Sign In');
  }

  renderToggleItem(title) {
    return (
      <TouchableOpacity key={title} onPress={() => { this.switchView(title); }}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }

  renderToggle() {
    return (
      <View style={styles.toggle}>
        {this.renderToggleItem('Account')}
        {this.renderToggleItem('Privacy')}
        {this.renderToggleItem('Resources')}
      </View>
    );
  }

  renderSubstance() {
    const { current } = this.state;
    const { navigation } = this.props;
    console.log('current', current);
    if (current === 'Account') {
      return (
      // <Text>Account Information</Text>
        <AccountInformation logout={this.logout} />
      );
    } else if (current === 'Privacy') {
      return (
        // <Text>Privacy Information</Text>
        <PrivacyInformation navigation={navigation} />
      );
    } else if (current === 'Resources') {
      return (
        // <Text>Resources</Text>
        <Resources />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View>
        {this.renderToggle()}
        {this.renderSubstance()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggle: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginVertical: 30,
  },
});

export default Information;
