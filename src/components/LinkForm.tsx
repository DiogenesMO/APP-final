import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface LinkFormProps {
    onSubmit: (link: string) => void;
}

const LinkForm: React.FC<LinkFormProps> = ({ onSubmit }) => {
    const [link, setLink] = useState('');

    const handleSubmit = () => {
        // Validar y enviar la información al servidor
        if (link.trim() !== '') {
            onSubmit(link);
            setLink('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={link}
                onChangeText={setLink}
                placeholder="Enter link URL"
            />
            <Button title="Add Link" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default LinkForm;