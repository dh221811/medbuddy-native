import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function Test() {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <TouchableOpacity style={styles.textContainer} onPress={() => {navigate('Test')}}>
        <Text>Centered Text Area</Text>
      </TouchableOpacity>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    backgroundColor: 'blue',
  },
  textContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  footer: {
    flex: 1.25,
    backgroundColor: 'yellow',
  },
});


