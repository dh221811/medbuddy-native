import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { styles } from './Information';



export default function MedForm() {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <TouchableOpacity style={styles.textContainer}>
        <Text>MedForm</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <BackButton label='Back'/>
        <NextButton label='Next' onPress={() => {navigate('Overview')}}/>
      </View>
    </View>
  );
};




