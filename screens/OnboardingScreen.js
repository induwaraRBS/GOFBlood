import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const OnboardingScreen = ({navigation}) => {

  return (
    <ImageBackground source={require('../assets/redback.jpg')} style={styles.backgroundImage}>

    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>Step 1</Text>
          <Text style={styles.stepTitle}>Check the Details</Text>
          <Text style={styles.stepDescription}>Make sure you meet the requirements to become a blood donor.</Text>
          <TouchableOpacity style={styles.button}
          onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Check Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.stepContainer}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>Step 2</Text>
          <Text style={styles.stepTitle}>Become a Member</Text>
          <Text style={styles.stepDescription}>Register with our blood donation system and create your donor profile.</Text>
          <TouchableOpacity style={styles.button}
          onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.stepContainer}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>Step 3</Text>
          <Text style={styles.stepTitle}>Donate Blood</Text>
          <Text style={styles.stepDescription}>Find a donation center near you and book an appointment.</Text>
          <TouchableOpacity style={styles.button}
          onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
  },
  stepContainer: {
    marginTop:30,
    
  },
  step: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    height:210,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stepNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#db4437',
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stepDescription: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#db4437',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
   
  },
});

export default OnboardingScreen;
