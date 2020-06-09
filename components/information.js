import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, AsyncStorage,
} from 'react-native';

import MapBackground from './map-background';
import styles from '../styles/info';

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
    const { current } = this.state;
    return (
      <TouchableOpacity key={title} onPress={() => { this.switchView(title); }}>
        <Text style={(title === current) ? styles.selectedToggleText : styles.toggleItemText}>{title}</Text>
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
    if (current === 'Account') {
      return (
        <AccountInformation logout={this.logout} />
      );
    } else if (current === 'Privacy') {
      return (
        <PrivacyInformation navigation={navigation} />
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
      <MapBackground>
        {this.renderToggle()}
        {this.renderSubstance()}
      </MapBackground>
    );
  }
}

export default Information;
