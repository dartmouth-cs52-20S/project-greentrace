/* eslint-disable no-alert */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  // Button,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
// import getDateUSFormatString from '../lib/date-lib';
import { fetchMessages } from '../services/api';

class Alerts extends Component {
  static navigationOptions = {
    title: 'Alerts',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: '#fff',
    // headerLeft: () => (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color="#fff"
    //   />
    // ),
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchMessages();
    console.log('messages');
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.props.messages);
    this.setState({ isLoading: false });
  }

  showMessageDetail(message) {
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
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateMessage}>No alerts yet</Text>
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
      <TouchableOpacity key={timestamp} style={styles.thumbnail} onPress={() => { this.showMessageDetail(message); }}>
        <Ionicons name="warning" style={styles.thumbnailIcon} />
        <View>
          <Text style={styles.thumbnailMessage}>{text}</Text>
          <Text style={styles.thumbnailTime}>{timestamp}</Text>
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
    const { messages } = this.props;
    const { isLoading } = this.state;
    if (isLoading) {
      return this.renderLoadingView();
    } else if (messages.length === 0) {
      return this.renderEmptyState();
    } else {
      return (
        <ScrollView>
          <FlatList
            data={messages}
            renderItem={({ item }) => { return this.renderMessageThumbnail(item); }}
            keyExtractor={(item) => item.timestamp}
            contentContainerStyle={styles.container}
            style={{ flex: 1 }}
          />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  thumbnail: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  thumbnailIcon: {
    marginHorizontal: 10,
    marginRight: 15,
    fontSize: 20,
    alignSelf: 'center',
  },
  thumbnailMessage: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
  emptyState: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateMessage: {
    fontSize: 15,
  },
});

const mapStateToProps = (reduxState) => ({
  messages: reduxState.messages.messages,
});

export default connect(mapStateToProps, { fetchMessages })(Alerts);
