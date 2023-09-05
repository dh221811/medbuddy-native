import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { styles } from './Information';



export default function FAQ() {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <TouchableOpacity style={styles.textContainer}>
        <Text>FAQ</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <NextButton label='Finished'/>
      </View>
    </View>
  );
};




