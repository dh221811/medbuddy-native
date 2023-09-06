import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function RadioButton({ yes, setYes, no, setNo, idk, setIdk }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option, setter) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.radioButtonGroup}>
      <TouchableOpacity
        style={[
          styles.radioButton,
          selectedOption === 'yes' && { backgroundColor: 'blue' },
        ]}
        onPress={() => handleOptionSelect('yes', setYes)}
      >
        <Text style={[styles.radioButtonText, selectedOption === 'yes' && { color: 'white' }]}>{yes}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.radioButton,
          selectedOption === 'no' && { backgroundColor: 'blue' },
        ]}
        onPress={() => handleOptionSelect('no', setNo)}
      >
        <Text style={[styles.radioButtonText, selectedOption === 'no' && { color: 'white' }]}>{no}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.radioButton,
          selectedOption === 'idk' && { backgroundColor: 'blue' },
        ]}
        onPress={() => handleOptionSelect('idk', setIdk)}
      >
        <Text style={[styles.radioButtonText, selectedOption === 'idk' && { color: 'white' }]}>{idk}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  radioButtonGroup: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  radioButton: {
    width: 120,
    maxWidth: 120,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    maxHeight: 50,
    minHeight: 40,
    borderRadius: 20,
    borderWidth: 2,
    margin: 10,
  },
  radioButtonText: {
    color: 'black',
    fontSize: 20,
  },
});
