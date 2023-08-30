import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';



export default function SelectLanguage() {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <TouchableOpacity style={styles.textContainer}>
        <Text>Select Language</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <BackButton label='Back'/>
        <NextButton label='Next' onPress={() => {navigate('Form')}}/>
      </View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});


