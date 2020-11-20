import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ButtonComponent({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonComponent;

const styles = StyleSheet.create({
    button: {
        margin: 15,
        height: 50,
        backgroundColor: "green",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"

    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});