import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProfileCard
        profilePicture="https://social-links-profile-main-henna.vercel.app/_next/image?url=%2Fassets%2Fimages%2Favatar-jessica.jpeg&w=3840&q=75"
        userName="Jessica Randall"
        address="London, United kingdom"
        description="Front-end developer and avid reader."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000',

  },
});

export default App;
