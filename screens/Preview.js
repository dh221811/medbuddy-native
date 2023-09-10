import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { languages } from '../objects/languages';
import { patient } from '../objects/patient';

export default function Preview() {

  const _text = languages[patient.language]
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/logo.png')}/>
      <View style={styles.header}>
        <Text>{_text.preview}</Text>
        <Text>{_text.previewInformation}</Text>
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity  style={styles.previewBox} onPress={() => {navigate('VideoPlayer')}}>
            <Text>{_text.watchVideo}</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.previewBox} onPress={() => {navigate('Information')}}>
            <Text>{_text.readInfosheet}</Text>
        </TouchableOpacity> 
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  footer: {
    flex: 1.25,
    backgroundColor: 'yellow',
  },
  previewBox:{
    backgroundColor: 'darkgreen',
    flex: 1,
    alignItems: 'center', 
justifyContent: 'center',
height: '95%',
margin: 5, 

  }
});


