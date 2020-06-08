import React from 'react';
import {
  Text, View, FlatList, TouchableOpacity, Linking,
} from 'react-native';
// import getDateUSFormatString from '../lib/date-lib';
import styles from '../styles/info';

const resourcesObject = require('../lib/resources.json');

const { resources } = resourcesObject;

const Resources = (props) => {
  const headerText = 'Resources';

  const renderResource = (item) => {
    const { name, website, phone } = item;
    return (
      <View style={styles.resource} key={name}>
        <Text style={styles.resourceTitle}>{name}</Text>
        <View style={styles.resourceContactContainer}>
          <TouchableOpacity onPress={() => { Linking.openURL(website); }}>
            <Text style={styles.resourceContact}>Website</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Linking.openURL(`tel:${phone}`); }}>
            <Text style={styles.resourceContact}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.resourceContainer}>
      <Text style={styles.sectionHeaderMap}>{headerText}</Text>
      <View style={styles.resourceList}>
        <FlatList
          data={resources}
          renderItem={({ item }) => { return renderResource(item); }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.container}
        />
      </View>
    </View>
  );
//   }
};

export default Resources;
