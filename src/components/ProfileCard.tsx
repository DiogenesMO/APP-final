import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import LinkButton from './LinkButton';

interface ProfileCardProps {
    profilePicture: string;
    userName: string;
    address: string;
    description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profilePicture, userName, address, description }: ProfileCardProps) => {
    const [links, setLinks] = useState<{ name: string; url: string }[]>([]);
    const [newLinkName, setNewLinkName] = useState('');
    const [newLinkUrl, setNewLinkUrl] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleAddLink = () => {
        if (newLinkName.trim() !== '' && newLinkUrl.trim() !== '') {
            setLinks([...links, { name: newLinkName, url: newLinkUrl }]);
            setNewLinkName('');
            setNewLinkUrl('');
            setShowForm(false);
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.profileCard}>
                <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
                <Text style={styles.userName}>{userName}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.description}>{description}</Text>
                {showForm && (
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            value={newLinkName}
                            onChangeText={setNewLinkName}
                            placeholder="Link Name"
                            placeholderTextColor="#fff"
                        />
                        <TextInput
                            style={styles.input}
                            value={newLinkUrl}
                            onChangeText={setNewLinkUrl}
                            placeholder="Link URL"
                            placeholderTextColor="#fff"
                        />
                        <Button title="Save Link" onPress={handleAddLink} color="#00FF00" />
                    </View>
                )}
                <View style={styles.buttonContainer}>
                    <LinkButton text="GitHub" onPress={() => { }} />
                    <LinkButton text="Frontend Mentor" onPress={() => { }} />
                    <LinkButton text="LinkedIn" onPress={() => { }} />
                    <LinkButton text="Twitter" onPress={() => { }} />
                    {links.map((link, index) => (
                        <LinkButton key={index} text={link.name} onPress={() => { }} />
                    ))}
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setShowForm(!showForm)}
                >
                    <Text style={[styles.addButtonLabel, { color: '#fff' }]}>+ Add Link</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
    },
    profileCard: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#ccc'
    },
    address: {
        fontSize: 16,
        marginBottom: 5,
        color: '#Ffff00',
    },
    description: {
        fontSize: 16,
        color: '#ccc',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#00FF00',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    addButtonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    formContainer: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#fff',
    },
});

export default ProfileCard;
