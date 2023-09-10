import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackNextButton from '../components/BackNextButton';
import { styles } from './Information';



export default function FAQ() {

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <TouchableOpacity style={styles.textContainer}>
        <Text>FAQ</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <BackNextButton/>
      </View>
    </View>
  );
};




