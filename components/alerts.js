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
// import getDateUSFormatString from '../lib/date-lib';
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
    // eslint-disable-next-line react/destructuring-assignment
    // const messages = this.props.fetchMessages();
    // console.log('fetched messages', messages);
    // eslint-disable-next-line react/destructuring-assignment
    // this.props.fetchMessages();
    // console.log('messages');
    // eslint-disable-next-line react/destructuring-assignment
    // console.log(this.props.messages);
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
            // const { messages } = this.props;
            // console.log('fetched messages', messages);
            // if (this.props.messages === undefined) {
            //   this.setState({ messages: [] });
            // } else this.setState({ messages: messages2 });
            // eslint-disable-next-line react/destructuring-assignment
            // this.props.fetchMessages();
            // console.log('messages');
            // eslint-disable-next-line react/destructuring-assignment
            // console.log(this.props.messages);
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
    console.log('message', message);
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
    // AsyncStorage.getItem('currUser')
    //   .then((response) => {
    //     console.log(response);
    //   });
    // console.log(AsyncStorage.getItem('currUser').then(response));
    // const { messages } = this.props;
    // const messages = iMessages;
    const { isLoading } = this.state;
    const { messages } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    if (isLoading) {
      return this.renderLoadingView();
    // eslint-disable-next-line react/destructuring-assignment
    } else if (messages.length === 0) {
      return this.renderEmptyState();
    } else {
      // eslint-disable-next-line react/destructuring-assignment
      // console.log('in display line 139', this.state.messages);
      // this.state.messages.forEach((message) => { console.log('made it to display messages', message); });
      // eslint-disable-next-line react/destructuring-assignment
      // console.log('LINE 142 TRYING TO DISPLAY', this.props.messages);
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
