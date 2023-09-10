import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackNextButton from '../components/BackNextButton';
import { languages } from '../objects/languages';
import { patient } from '../objects/patient';

export default function Information() {

  const _text = languages[patient.language]
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [page, setPage] = useState(1);

  function handleNext() {
    if (page < 8) {
        setPage(page + 1);
      }
    else {
      navigate('MedForm')
    }
    };

    function handleBack() {
      if (page === 1) {
        navigation.goBack();
        }
      else {
        setPage(page - 1);
      }
      };
  

  let content;

  switch (page) {
    case 1:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information1head}</Text>
          <Text style={styles.textParagraph}>{_text.information1text}</Text>
        </View>
      );
      break;
  
    case 2:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information2head}</Text>
          <Text style={styles.textParagraph}>{_text.information2text}</Text>
        </View>
      );
      break;
  
    case 3:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information3head}</Text>
          <Text style={styles.textParagraph}>{_text.information3text}</Text>
        </View>
      );
      break;
  
    case 4:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information4head}</Text>
          <Text style={styles.textParagraph}>{_text.information4text}</Text>
        </View>
      );
      break;
  
    case 5:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information5head}</Text>
          <Text style={styles.textParagraph}>{_text.information5text}</Text>
        </View>
      );
      break;
  
    case 6:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information6head}</Text>
          <Text style={styles.textParagraph}>{_text.information6text}</Text>
        </View>
      );
      break;
  
    case 7:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information7head}</Text>
          <Text style={styles.textParagraph}>{_text.information7text}</Text>
        </View>
      );
      break;
  
    case 8:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information8head}</Text>
          <Text style={styles.textParagraph}>{_text.information8text}</Text>
        </View>
      );
      break;
  
    default:
      content = (
        <View style={styles.textContainer}>
          <Text>Unknown Page</Text>
        </View>
      );
  }
  
  return (
    <View style={styles.container}>
            <Image style={styles.logo} source={require('../images/logo.png')}/>
      <View style={styles.header}>
        <Text style={styles.heading}>{_text.informationHeading}</Text>
        </View>
      {content}
      <View style={styles.footer}>
        <Text>{page}/8</Text>
        <BackNextButton onBackPress={handleBack} onNextPress={handleNext}/>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 35,
  },
  textContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
  },
  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 75,
  },
  textParagraph: {
    fontSize: 25,
    marginTop: 25,
  },
  footer: {
    flex: 1.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
