import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { languages } from '../objects/languages';
import { patient } from '../objects/patient';
import BackNextButton from '../components/BackNextButton';

export default function Form() {

  const _text = languages[patient.language]
  const [prename, setPrename] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(new Date()); // Initialize with a default date
  const [insuranceNumber, setInsuranceNumber] = useState('');
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.form}>
      <TextInput
        label={_text.prename}
        value={prename}
        onChangeText={text => setPrename(text)}
        style={styles.input}
      />
      <TextInput
        label={_text.lastName}
        value={lastName}
        onChangeText={text => setLastName(text)}
        style={styles.input}
      />
      <DateTimePicker

        value={dob}
        mode="date"
        display="default"
        maximumDate={new Date()} // Allow selecting dates in the past and future
        onChange={(event, date) => setDob(date)}
        testID="dateTimePicker"
        style={styles.input}
  
      />
      <TextInput
        label={_text.insuranceNumber}
        value={insuranceNumber}
        onChangeText={text => setInsuranceNumber(text)}
        style={styles.input}
      />
      </View>
      <View style={styles.footer}>
        <BackNextButton onBackPress={() => navigation.goBack()} onNextPress={() => navigate('Preview')}/>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: 'blue',
  },
  form: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginBottom: 10,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
