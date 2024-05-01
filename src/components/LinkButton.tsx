import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LinkButtonProps {
    text: string;
    onPress: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.linkButton} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    linkButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        width: 300,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default LinkButton;
