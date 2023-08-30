import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton({label}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
    },
    backButtonText: {
        color: 'black',
        fontSize: 20,
    }
});
