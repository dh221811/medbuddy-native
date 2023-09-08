import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { patient } from '../objects/patient';
import { languages } from '../objects/languages';

export default function BackNextButton({ onNextPress, onBackPress }) {

    const label = languages[patient.language]
    return (
        <View style={styles.backNextContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={styles.backButtonText}>{label.backButton}</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.primaryButton} onPress={onNextPress}>
            <Text style={styles.primaryButtonText}>{label.nextButton}</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    backNextContainer: {
    flexDirection: 'row',
    },
    primaryButton: {
        width: '12,5%',
        maxWidth: '15%',
        backgroundColor: 'darkblue', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        maxHeight: 50,
        minHeight: 40,
        borderRadius: 30,
        marginLeft: 5,
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 20,
    },
    backButton: {
        width: '12,5%',
        maxWidth: '15%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        maxHeight: 50,
        minHeight: 40,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 2,
    },
    backButtonText: {
        color: 'black',
        fontSize: 20,
    }
});
