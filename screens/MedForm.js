import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { languages } from '../objects/languages';
import { patient } from '../objects/patient';
import RadioButton from '../components/RadioButton';

export default function MedForm() {

  const _text = languages[patient.language]
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  
    function handleNext() {
    if (page < 7) {
        setPage(page + 1);
      }
    else {
      navigate('Overview')
    }
    };

    function handleBack() {
      if (page === 0) {
        navigation.goBack();
        }
      else {
        setPage(page - 1);
      }
      };
  

  let content;

  switch (page) {
    case 0:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.question1}</Text>
          <Text style={styles.textQuestion}>{_text.question1a}</Text>
          <RadioButton yes={_text.yes} no={_text.no} idk={_text.idk}/>
          <Text style={styles.textQuestion}>{_text.question1b}</Text>
          <RadioButton yes={_text.yes} no={_text.no} idk={_text.idk}/>
          <Text style={styles.textQuestion}>{_text.question1b}</Text>
          <RadioButton yes={_text.yes} no={_text.no} idk={_text.idk}/>
          <Text style={styles.textQuestion}>{_text.question1b}</Text>
          <RadioButton yes={_text.yes} no={_text.no} idk={_text.idk}/>         
        </View>
      );
      break;
  
    case 1:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information2head}</Text>
          <Text style={styles.textParagraph}>{_text.information2text}</Text>
        </View>
      );
      break;
  
    case 2:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information3head}</Text>
          <Text style={styles.textParagraph}>{_text.information3text}</Text>
        </View>
      );
      break;
  
    case 3:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information4head}</Text>
          <Text style={styles.textParagraph}>{_text.information4text}</Text>
        </View>
      );
      break;
  
    case 4:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information5head}</Text>
          <Text style={styles.textParagraph}>{_text.information5text}</Text>
        </View>
      );
      break;
  
    case 5:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information6head}</Text>
          <Text style={styles.textParagraph}>{_text.information6text}</Text>
        </View>
      );
      break;
  
    case 6:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.information7head}</Text>
          <Text style={styles.textParagraph}>{_text.information7text}</Text>
        </View>
      );
      break;
  
    case 7:
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
      <View style={styles.header}>
        <Text style={styles.heading}>{_text.questionnaireHeading}</Text>
        </View>
      {content}
      <View style={styles.footer}>
        <BackButton 
        label='Back'
        onPress={handleBack}
        />
        <NextButton
          label='Next'
          onPress={handleNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
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
    marginTop: 20,
  },
  textQuestion: {
    fontSize: 25,
    marginTop: 5,
  },
  footer: {
    flex: 1.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
