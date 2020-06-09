/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import styles from '../styles/alerts';

import MapBackground from './map-background';
import { fetchMessages, setCurrMessage } from '../services/api';


class Alerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
    };
    this.onRefresh.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
    this.setState({ isLoading: false });
  }

  onRefresh() {
    this.setState({ refreshing: true });
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchMessages();
    this.setState({ refreshing: false, isLoading: false });
  }

  showMessageDetail(message) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.setCurrMessage(message.id);
    // eslint-disable-next-line react/destructuring-assignment
    this.props.navigation.navigate('AlertsDetail', message);
  }

  renderLoadingView() {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  renderEmptyState() {
    return (
      <MapBackground>
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateMessage}>No alerts yet! :(</Text>
          <TouchableOpacity onPress={() => {
            // eslint-disable-next-line react/destructuring-assignment
            this.props.fetchMessages();
            this.setState({ isLoading: false });
          }}
          >
            <Ionicons name="refresh" size="26" style={styles.refresh} />
          </TouchableOpacity>
        </View>
      </MapBackground>
    );
  }

  renderMessageThumbnail(message) {
    const { contactDate } = message;
    const text = new Date(contactDate).toDateString();

    return (
      <TouchableOpacity key={contactDate} style={styles.thumbnail} onPress={() => { this.showMessageDetail(message); }}>
        <Ionicons name="warning" style={styles.thumbnailIcon} />
        <View>
          <Text style={styles.thumbnailMessage}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { isLoading } = this.state;
    const { messages } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    if (isLoading) {
      return this.renderLoadingView();
    // eslint-disable-next-line react/destructuring-assignment
    } else if (messages.length === 0) {
      return this.renderEmptyState();
    } else {
      const { refreshing } = this.state;
      return (
        <MapBackground>
          <ScrollView
            refreshControl={(
              <RefreshControl
                refreshing={refreshing}
                // eslint-disable-next-line react/jsx-no-bind
                onRefresh={this.onRefresh.bind(this)}
              />
            )}
          >
            <FlatList
            // eslint-disable-next-line react/destructuring-assignment
              data={this.props.messages}
              renderItem={({ item }) => { return this.renderMessageThumbnail(item); }}
              keyExtractor={(item) => item.timestamp}
              contentContainerStyle={styles.overviewContainer}
              style={{ flex: 1 }}
            />
          </ScrollView>
        </MapBackground>
      );
    }
  }
}

const mapStateToProps = (reduxState) => ({
  messages: reduxState.messages.messages,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => dispatch(fetchMessages()),
    setCurrMessage: (id) => dispatch(setCurrMessage(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
