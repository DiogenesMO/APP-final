import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';

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

    const initialLinks = [
        { name: "GitHub", url: "https://github.com/" },
        { name: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/" },
        { name: "Twitter", url: "https://twitter.com/" }
    ];

    const handleAddLink = async () => {
        if (newLinkName.trim() !== '' && newLinkUrl.trim() !== '') {
            const newItem = { name: newLinkName, url: newLinkUrl };
            setLinks([...links, newItem]);
            setNewLinkName('');
            setNewLinkUrl('');
            setShowForm(false);

            // Incluye toda la información requerida del formulario
            const profileData = {
                links: [newItem]
            };

            // Lógica para guardar los datos en el servidor
            try {
                const response = await fetch("http://192.168.1.8:3001/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(profileData)
                });
                const data = await response.json();
                console.log("Data saved successfully:", data);
            } catch (error) {
                console.error("Error saving data:", error);
            }

            console.log([...links, newItem]);

        }
    };

    const handleCancel = () => {
        setNewLinkName('');
        setNewLinkUrl('');
        setShowForm(false);
    };

    const handleAddLinkButtonPress = () => {
        setShowForm(true);
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
                            <TouchableOpacity onPress={handleCancel}>
                                <Text style={[styles.button, { backgroundColor: '#dc3545' }]}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleAddLink}>
                                <Text style={[styles.button, { backgroundColor: '#28a745' }]}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                <ScrollView style={styles.scrollView}>
                    <View style={styles.linkContainer}>
                        {initialLinks.map((link, index) => (
                            <TouchableOpacity key={index} onPress={() => Linking.openURL(link.url)}>
                                <Text style={styles.link}>{link.name}</Text>
                            </TouchableOpacity>
                        ))}
                        {links.map((link, index) => (
                            <TouchableOpacity key={index} onPress={() => Linking.openURL(link.url)}>
                                <Text style={styles.link}>{link.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddLinkButtonPress}
                >
                    <Text style={[styles.addButtonLabel, { color: '#fff' }]}>+ New Link</Text>
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
    linkContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    link: {
        padding: 13,
        marginBottom: 4,
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: 12,
        width: 300,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    button: {
        padding: 10,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 5,
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
        fontSize: 20,
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


