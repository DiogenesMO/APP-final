import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Linking } from 'react-native';
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
        console.log([...links, { name: newLinkName, url: newLinkUrl }]);
    };

    const handleCancel = () => {
        setNewLinkName('');
        setNewLinkUrl('');
        setShowForm(false);
    };

    const handleLinkPress = (url: string) => {
        Linking.openURL(url);
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
                            placeholder="Nombre del enlace"
                            placeholderTextColor="#fff"
                        />
                        <TextInput
                            style={styles.input}
                            value={newLinkUrl}
                            onChangeText={setNewLinkUrl}
                            placeholder="URL del enlace"
                            placeholderTextColor="#fff"
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Cancelar" onPress={handleCancel} color='#dc3545' />
                            <View style={{ width: 10 }}></View>
                            <Button title="Guardar" onPress={handleAddLink} color='#28a745' />
                        </View>
                    </View>
                )}
                <ScrollView style={styles.scrollView}>
                    <View style={styles.buttonContainer}>
                        <LinkButton text="GitHub" url="https://github.com/" />
                        <LinkButton text="Frontend Mentor" url="https://www.frontendmentor.io/" />
                        <LinkButton text="LinkedIn" url="https://www.linkedin.com/" />
                        <LinkButton text="Twitter" url="https://twitter.com/" />
                        {links.map((link, index) => (
                            <LinkButton key={index} text={link.name} url={link.url} />
                        ))}
                    </View>
                </ScrollView>

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setShowForm(!showForm)}
                >
                    <Text style={[styles.addButtonLabel, { color: '#fff' }]}>+ New Link</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
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

    scrollView: {
        maxHeight: 300,
    },

    addButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 12,
        width: 300,
        marginTop: 10,
        alignItems: 'center',
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
