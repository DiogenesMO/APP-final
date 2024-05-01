import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './src/components/ProfileCard';



const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProfileCard
        profilePicture="https://th.bing.com/th/id/OIP.6SBJtG_5zsxnpXrAKp5rGgHaJU?w=156&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
