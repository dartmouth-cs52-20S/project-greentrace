import React from 'react';
import {
  SafeAreaView, Text, View, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'green',
    width: 250,
    height: 10,
  },
  container: {
    margin: 12,
    flex: 1,
  },
  title: {
    marginTop: 15,
    marginBottom: 10,
    color: '#444',
    fontSize: 14,
  },
  swithBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 14,
    color: '#222',
  },
  link: {
    padding: 5,
    color: '#892853',
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginTop: 12,
    marginBottom: 6,
  },
});

export default class InfoModal extends React.Component {
  callParentScreenFunction() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.callParentScreenFunction();
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.footer}>
          <Text onPress={this.callParentScreenFunction} style={styles.link}>
            Press to call parent function
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
