import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { patient } from '../objects/patient';

const languageOptions = [
  { name: 'german', label: 'Deutsch', description: 'Description for German', flag: require('../images/turkish.png') },
  { name: 'english', label: 'English', description: 'Description for English', flag: require('../images/turkish.png') },
  { name: 'turkish', label: 'Türkçe', description: 'Description for Turkish', flag: require('../images/turkish.png') },
  { name: 'serbian', label: 'Српски', description: 'Description for Serbian', flag: require('../images/turkish.png') },
  { name: 'arabian', label: 'عربي', description: 'Description for Arabian', flag: require('../images/turkish.png') },
  { name: 'rumanian', label: 'Română', description: 'Description for Rumanian', flag: require('../images/turkish.png') },
  { name: 'ukrainian', label: 'Українська', description: 'Description for Ukrainian', flag: require('../images/turkish.png') },
  { name: 'croatian', label: 'Hrvatski', description: 'Description for Croatian', flag: require('../images/turkish.png') },
  { name: 'polish', label: 'Polski', description: 'Description for Polish', flag: require('../images/turkish.png') },
  { name: 'russian', label: 'Русский', description: 'Description for Russian', flag: require('../images/turkish.png') },
  { name: 'spanish', label: 'Español', description: 'Description for Spanish', flag: require('../images/turkish.png') },
  { name: 'portuguese', label: 'Português', description: 'Description for Portuguese', flag: require('../images/turkish.png') },
];

export default function SelectLanguage() {
  const { navigate } = useNavigation();

  const handleLanguagePress = (languageName) => {
    patient.language = languageName;
    navigate('Form');
  };

  const windowWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    header: {
      flex: 2,
      width: windowWidth,
    },
    logo: {
      width: 80,
      height: 80,
      marginLeft: 15,
    },
    gridContainer: {
      width: windowWidth * 0.75,
      flex: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    gridItem: {
      width: '33.33%',
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    flagImage: {
      width: 75,
      height: 75,
      marginRight: 10,
      borderRadius: 50,
    },
    descriptionContainer: {
      flex: 1,
    },
    description: {
      marginTop: 8,
    },
    footer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Image style={styles.logo} source={require('../images/logo.png')}/>
      </SafeAreaView>
      <View style={styles.gridContainer}>
        {languageOptions.map((language, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => handleLanguagePress(language.name)}
          >
            <Image source={language.flag} style={styles.flagImage} />
            <View style={styles.descriptionContainer}>
              <Text>{language.label}</Text>
              <Text style={styles.description}>{language.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  );
}
