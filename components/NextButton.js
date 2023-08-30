import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NextButton({ label, onPress }) {
    return (
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
            <Text style={styles.primaryButtonText}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    primaryButton: {
        width: '10%',
        maxWidth: '20%',
        backgroundColor: 'darkblue', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        borderRadius: 20,
        marginLeft: 5,
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 20,
    },
});
