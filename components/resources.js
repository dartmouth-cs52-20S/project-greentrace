import React from 'react';
import {
  StyleSheet, Text, View, FlatList, TouchableOpacity, Linking,
} from 'react-native';
// import getDateUSFormatString from '../lib/date-lib';

const resourcesObject = require('../lib/resources.json');

const { resources } = resourcesObject;

const Resources = (props) => {
  const headerText = 'Resources';

  const renderResource = (item) => {
    const { name, website, phone } = item;
    return (
      <View style={styles.resource} key={name}>
        <Text>{name}</Text>
        <TouchableOpacity onPress={() => { Linking.openURL(website); }}><Text>Website</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { Linking.openURL(`tel:${phone}`); }}><Text>Call</Text></TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>{headerText}</Text>
      <FlatList
        data={resources}
        renderItem={({ item }) => { return renderResource(item); }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.container}
      />
    </View>
  );
//   }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    minHeight: 700,
  },
  resource: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 7,
    backgroundColor: 'white',
  },
});

export default Resources;
