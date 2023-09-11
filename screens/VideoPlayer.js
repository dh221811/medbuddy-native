import React, {useRef, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackNextButton from '../components/BackNextButton';
import { Video, ResizeMode } from 'expo-av';
import { patient } from '../objects/patient';
import { languages } from '../objects/languages';

export default function VideoPlayer() {

  const _text = languages[patient.language]
  const informationVideo = useRef(null);
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.textContainer}>
      <Video
          ref={informationVideo}
          style={styles.video}
          source={require(`../videos/ENGLISH.mp4`)}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay // Start the video automatically
          isMuted={false} // Set to true to mute the audio, false to activate audio
        />

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
  video: {
  flex: 1,
  alignSelf: 'stretch',
  },
  footer: {
    flex: 1.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});


