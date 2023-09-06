import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BackButton({label, onPress}) {
    return (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            <Text style={styles.backButtonText}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backButton: {
        width: '10%',
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
