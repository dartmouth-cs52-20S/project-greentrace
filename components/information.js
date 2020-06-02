import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity,
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
  }

  switchView(title) {
    this.setState({ current: title });
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
      <View>
        {this.renderToggleItem('Account')}
        {this.renderToggleItem('Privacy')}
        {this.renderToggleItem('Resources')}
      </View>
    );
  }

  renderSubstance() {
    const { current } = this.state;
    console.log('current', current);
    if (current === 'Account') {
      return (
        <AccountInformation />
      );
    } else if (current === 'Privacy') {
      return (
        <PrivacyInformation />
      );
    } else if (current === 'Resources') {
      return (
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

export default Information;
