import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
=======
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';




export default function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={() => { navigate('SelectLanguage') }}>
        <Image
          style={styles.logo}
          resizeMode="contain" // Use resizeMode to ensure the image fits the screen
          source={require('../images/Logo_ohneSchatten.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width; // Get the width of the screen

const styles = StyleSheet.create({
  logo: {
    width: windowWidth * 0.7, // Use a fraction of the screen width
    height: undefined, // Allow the height to adjust based on the aspect ratio
    aspectRatio: 1721 / 790, // Set the aspect ratio of the image
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  textContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1.25,
    backgroundColor: 'yellow',
  },
});
