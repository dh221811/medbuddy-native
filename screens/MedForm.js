import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { languages } from '../objects/languages';
import { patient } from '../objects/patient';
import RadioButton from '../components/RadioButton';
import BackNextButton from '../components/BackNextButton';

export default function MedForm() {

  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
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
  const [page, setPage] = useState(1);
  
  function handleNext() {
    if (page < 5) {
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
          <TextInput
        label={_text.size}
        value={size}
        onChangeText={text => setSize(text)}
        style={styles.input}
      />

          <TextInput
        label={_text.weight}
        value={weight}
        onChangeText={text => setWeight(text)}
        style={styles.input}
      />
        </View>
      );
      break;
  
    case 2:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.question1}</Text>
          <Text style={styles.textQuestion}>{_text.question1a}</Text>
          <RadioButton yes={_text.yes} setYes={() => setCtExam(_text.yes)} no={_text.no} setNo={() => setCtExam(_text.no)} idk={_text.idk} setIdk={() => setCtExam(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question1b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setVascularExam(_text.yes)} no={_text.no} setNo={() => setVascularExam(_text.no)} idk={_text.idk} setIdk={() => setVascularExam(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question1c}</Text>
          <RadioButton yes={_text.yes} setYes={() => setKidneyCondition(_text.yes)} no={_text.no} setNo={() => setKidneyCondition(_text.no)} idk={_text.idk} setIdk={() => setKidneyCondition(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question1d}</Text>
          <RadioButton yes={_text.yes} setYes={() => setLegVeinExam(_text.yes)} no={_text.no} setNo={() => setLegVeinExam(_text.no)} idk={_text.idk} setIdk={() => setLegVeinExam(_text.idk)}/>
        </View>
      );
      break;
  
    case 3:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.question2}</Text>
          <Text style={styles.textQuestion}>{_text.question2a}</Text>
          <RadioButton yes={_text.yes} setYes={() => setNausea(_text.yes)} no={_text.no} setNo={() => setNausea(_text.no)} idk={_text.idk} setIdk={() => setNausea(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question2b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setAsthma(_text.yes)} no={_text.no} setNo={() => setAsthma(_text.no)} idk={_text.idk} setIdk={() => setAsthma(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question2c}</Text>
          <RadioButton yes={_text.yes} setYes={() => setRash(_text.yes)} no={_text.no} setNo={() => setRash(_text.no)} idk={_text.idk} setIdk={() => setRash(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question2d}</Text>
          <RadioButton yes={_text.yes} setYes={() => setSeizures(_text.yes)} no={_text.no} setNo={() => setSeizures(_text.no)} idk={_text.idk} setIdk={() => setSeizures(_text.idk)}/>
        </View>
      );
      break;
  
    case 4:
      content = (
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{_text.question3}</Text>
          <Text style={styles.textQuestion}>{_text.question3a}</Text>
          <RadioButton yes={_text.yes} setYes={() => setAllergies(_text.yes)} no={_text.no} setNo={() => setAllergies(_text.no)} idk={_text.idk} setIdk={() => setAllergies(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3b}</Text>
          <RadioButton yes={_text.yes} setYes={() => setHeartCondition(_text.yes)} no={_text.no} setNo={() => setHeartCondition(_text.no)} idk={_text.idk} setIdk={() => setHeartCondition(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3c}</Text>
          <RadioButton yes={_text.yes} setYes={() => setKidneyCondition(_text.yes)} no={_text.no} setNo={() => setKidneyCondition(_text.no)} idk={_text.idk} setIdk={() => setKidneyCondition(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3d}</Text>
          <RadioButton yes={_text.yes} setYes={() => setThyroidCondition(_text.yes)} no={_text.no} setNo={() => setThyroidCondition(_text.no)} idk={_text.idk} setIdk={() => setThyroidCondition(_text.idk)}/>
          <Text style={styles.textQuestion}>{_text.question3e}</Text>
          <RadioButton yes={_text.yes} setYes={() => setDiabetes(_text.yes)} no={_text.no} setNo={() => setDiabetes(_text.no)} idk={_text.idk} setIdk={() => setDiabetes(_text.idk)}/>
        </View>
      );
      break;
  
    case 5:
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
        <Image style={styles.logo} source={require('../images/logo.png')}/>
      <View style={styles.header}>
        <Text style={styles.heading}>{_text.questionnaireHeading}</Text>
        </View>
      {content}
      <View style={styles.footer}>
        <Text>{page}/6</Text>
        <BackNextButton onBackPress={handleBack} onNextPress={handleNext}/>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 35,
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 0,
    left: 0,
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
    marginTop: 70,
    marginBottom: 20,
  },
  textQuestion: {
    fontSize: 25,
    marginTop: 5,
  },
  input: {
    height: 40,
    marginBottom: 10,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },
  footer: {
    flex: 1.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
