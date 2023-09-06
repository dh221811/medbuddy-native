import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { languages } from '../objects/languages';
import { patient } from '../objects/patient';
import RadioButton from '../components/RadioButton';

export default function MedForm() {

  const [pregnancy, setPregnancy] = useState('');
  const [ctExam, setCtExam] = useState('');
  const [vascularExam, setVascularExam] = useState('');
  const [kidneyExam, setKidneyExam] = useState('');
  const [legVeinExam, setLegVeinExam] = useState('');
  const [nausea, setNausea] = useState('');
  const [asthma, setAsthma] = useState('');
  const [rash, setRash] = useState('');
  const [seizures, setSeizures] = useState('');
  const [shivering, setShivering] = useState('');
  const [allergies, setAllergies] = useState('');
  const [heartCondition, setHeartCondition] = useState('');
  const [kidneyCondition, setKidneyCondition] = useState('');
  const [thyroidCondition, setThyroidCondition] = useState('');
  const [diabetes, setDiabetes] = useState('');
  // const [medication, setMedication] = useState(`${_text.no}`);
  const [myastheniaGravis, setMyastheniaGravis] = useState('');
  const [pacemaker, setPacemaker] = useState('');

  const _text = languages[patient.language]
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  
  function handleNext() {
    if (page < 4) {
      setPage(page + 1);
      patient.ctExam = ctExam;
      patient.pregnancy = pregnancy;
      patient.vascularExam = vascularExam;
      patient.kidneyExam = kidneyExam;
      patient.legVeinExam = legVeinExam;
      patient.nausea = nausea;
      patient.asthma = asthma;
      patient.rash = rash;
      patient.seizures = seizures;
      patient.shivering = shivering;
      patient.allergies = allergies;
      patient.heartCondition = heartCondition;
      patient.kidneyCondition = kidneyCondition;
      patient.thyroidCondition = thyroidCondition;
      patient.diabetes = diabetes;
    }
    else {
      navigate('Overview')
      console.log(patient)
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
          <Text>0</Text>
        </View>
      );
      break;
  
    case 1:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.question1}</Text>
          <Text style={styles.textQuestion}>{_text.question1a}</Text>
          <RadioButton yes={_text.yes} setYes={() => setCtExam(_text.yes)} no={_text.no} setNo={() => setCtExam(_text.no)} idk={_text.idk} setIdk={() => setCtExam(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question1b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setVascularExam(_text.yes)} no={_text.no} setNo={() => setVascularExam(_text.no)} idk={_text.idk} setIdk={() => setVascularExam(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question1b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setKidneyCondition(_text.yes)} no={_text.no} setNo={() => setKidneyCondition(_text.no)} idk={_text.idk} setIdk={() => setKidneyCondition(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question1b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setLegVeinExam(_text.yes)} no={_text.no} setNo={() => setLegVeinExam(_text.no)} idk={_text.idk} setIdk={() => setLegVeinExam(_text.idk)}/>
        </View>
      );
      break;
  
    case 2:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.question2}</Text>
          <Text style={styles.textQuestion}>{_text.question2a}</Text>
          <RadioButton yes={_text.yes} setYes={() => setNausea(_text.yes)} no={_text.no} setNo={() => setNausea(_text.no)} idk={_text.idk} setIdk={() => setNausea(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question2b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setAsthma(_text.yes)} no={_text.no} setNo={() => setAsthma(_text.no)} idk={_text.idk} setIdk={() => setAsthma(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question2b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setRash(_text.yes)} no={_text.no} setNo={() => setRash(_text.no)} idk={_text.idk} setIdk={() => setRash(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question2b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setSeizures(_text.yes)} no={_text.no} setNo={() => setSeizures(_text.no)} idk={_text.idk} setIdk={() => setSeizures(_text.idk)}/>
        </View>
      );
      break;
  
    case 3:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.question3}</Text>
          <Text style={styles.textQuestion}>{_text.question3a}</Text>
          <RadioButton yes={_text.yes} setYes={() => setShivering(_text.yes)} no={_text.no} setNo={() => setShivering(_text.no)} idk={_text.idk} setIdk={() => setShivering(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setAllergies(_text.yes)} no={_text.no} setNo={() => setAllergies(_text.no)} idk={_text.idk} setIdk={() => setAllergies(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setHeartCondition(_text.yes)} no={_text.no} setNo={() => setHeartCondition(_text.no)} idk={_text.idk} setIdk={() => setHeartCondition(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setKidneyCondition(_text.yes)} no={_text.no} setNo={() => setKidneyCondition(_text.no)} idk={_text.idk} setIdk={() => setKidneyCondition(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setThyroidCondition(_text.yes)} no={_text.no} setNo={() => setThyroidCondition(_text.no)} idk={_text.idk} setIdk={() => setThyroidCondition(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setDiabetes(_text.yes)} no={_text.no} setNo={() => setDiabetes(_text.no)} idk={_text.idk} setIdk={() => setDiabetes(_text.idk)}/>
        </View>
      );
      break;
  
    case 4:
      content = (
        <View style={styles.textContainer}>
          <Text>Diabetes, Medication, Pacemaker</Text>
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
