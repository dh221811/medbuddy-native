import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function Preview() {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.textContainer}>
        <TouchableOpacity  style= {styles.previewBox} onPress={() => {navigate('VideoPlayer')}}>
            <Text>Video</Text>
        </TouchableOpacity>  
        <TouchableOpacity style= {styles.previewBox} onPress={() => {navigate('Information')}}>
            <Text>Information</Text>
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
  header: {
    flex: 2,
    backgroundColor: 'blue',
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


