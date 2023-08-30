import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {StepProgressBar} from 'your-step-progress-bar-library';



export default function Home() {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={() => {navigate('SelectLanguage')}}>
        <Text>MedBuddy - Touch to start</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
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


