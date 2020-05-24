import React, { Component } from 'react';
import {
  // StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import getDateUSFormatString from '../lib/date-lib';
import { fetchMessages } from '../services/api';

class Alerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchMessages();
    this.setState({ isLoading: false });
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
      <View>
        <Text>No alerts yet! :(</Text>
      </View>
    );
  }

  renderMessageThumbnail(message) {
    const {
      timestamp, covid, tested,
    } = message;
    let text;
    if (covid && tested) {
      text = 'Contact with COVID-19 positive individual';
    } else if (!covid && tested) {
      text = 'Contact with COVID-19 negative individual';
    } else { // not tested/is being tested
      text = 'Contact with individual being tested for COVID-19';
    }

    return (
      <TouchableOpacity>
        <Ionicons name="warning" />
        <View>
          <Text>{text}</Text>
          <Text>{getDateUSFormatString(timestamp)}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { messages } = this.props;
    const { isLoading } = this.state;
    if (isLoading) {
      return this.renderLoadingView();
    } else if (messages.length == 0) {
      return this.renderEmptyState();
    } else {
      return (
        <ScrollView>
          <FlatList
            data={messages}
            renderItem={({ item }) => { return this.renderMessageThumbnail(item); }}
            keyExtractor={(item) => item.timestamp}
            // style={styles.listView}
          />
        </ScrollView>
      );
    }
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
// });

const mapStateToProps = (reduxState) => ({
  messages: reduxState.messages.messages,
});

export default connect(mapStateToProps, { fetchMessages })(Alerts);
