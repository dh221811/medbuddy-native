import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackNextButton from '../components/BackNextButton';
import Video from 'react-native-video';


export default function VideoPlayer() {

  const { navigate } = useNavigation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.textContainer}> 
        </View>
      <View style={styles.footer}>
        <BackNextButton onBackPress={() => navigation.goBack()} onNextPress={() => {navigate('Information')}}/>
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
    flex: 1.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});


