import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

interface LinkButtonProps {
    text: string;
    url: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, url }) => {
    const handlePress = () => {
        Linking.openURL(url);
    };

    return (
        <TouchableOpacity style={styles.linkButton} onPress={handlePress}>
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
