import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { styles } from './Information';



export default function Overview() {

  const { navigate } = useNavigation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <TouchableOpacity style={styles.textContainer}>
        <Text>Overview</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <BackButton label="Back" onPress={() => navigation.goBack()}/>
        <NextButton label='Next' onPress={() => {navigate('Agreement')}}/>
      </View>
    </View>
  );
};




