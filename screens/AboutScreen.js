import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


const AboutScreen = () => {
  return (
      
        <ImageBackground source={require('../assets/drop.jpg')}style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.box}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Our blood donation system is dedicated to saving lives by making blood donation more accessible and convenient. We strive to connect blood donors with blood recipients in need, and to promote awareness and education about the importance of blood donation.
        </Text>
        <Text style={styles.contentText}>
          Our team is comprised of dedicated individuals with a passion for making a difference in the world. We are constantly working to improve our system and make it more user-friendly for both donors and recipients.
        </Text>
        <Text style={styles.contentText}>
          Thank you for choosing to be a part of our blood donation community. Together, we can make a difference and save lives.
        </Text>
      </View>
        </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  box:{
    
    marginTop:100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    marginBottom: 10,
  },
});

export default AboutScreen;
