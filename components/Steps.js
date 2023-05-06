import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Steps = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.subtitle}>Welcome to Gift Of Blood</Text>
        <Text style={styles.description}>
          Our platform helps connect blood donors with those in need of blood transfusions. 
          Join our community of donors and make a difference in someone's life.
        </Text>
      </View>

      <View style={styles.stepsContainer}>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>Step 1</Text>
            <Text style={styles.stepTitle}>Register with the system</Text>
            <Text style={styles.stepDescription}>Create an account and fill out your information</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>Step 2</Text>
            <Text style={styles.stepTitle}>Pass the health test</Text>
            <Text style={styles.stepDescription}>Complete a health screening to ensure you are eligible to donate blood</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>Step 3</Text>
            <Text style={styles.stepTitle}>Donate blood</Text>
            <Text style={styles.stepDescription}>Find a blood drive near you or schedule a donation at a donation center</Text>
          </View>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    // flex: 1,
    // backgroundColor: '#ffffff',
  },
  
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    // flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  borderColor: 'red',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 16,
  },
  stepsContainer: {
   
    marginTop:34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  step: {
    borderColor: '#000000',
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
    elevation: 5,
  },
  stepNumber: {
    color: '#d72323',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stepTitle: {
    color: '#d72323',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stepDescription: {
    textAlign: 'center',
    color: '#6d6d6d',
    fontSize: 14,
    marginBottom: 10,
},
  
});

export default Steps;
