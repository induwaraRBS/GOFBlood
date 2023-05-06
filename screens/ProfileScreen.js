import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.title}>Blood Donor</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Ionicons name="ios-information-circle-outline" size={24} color="#333" />
          <Text style={styles.sectionTitle}>About</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed volutpat metus.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Ionicons name="ios-contacts-outline" size={24} color="#333" />
          <Text style={styles.sectionTitle}>Contact</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionText}>
            Email: johndoe@gmail.com
          </Text>
          <Text style={styles.sectionText}>
            Phone: 123-456-7890
          </Text>
          <Text style={styles.sectionText}>
            Address: 123 Main St, Anytown USA
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: '#888',
    marginTop: 10,
  },
  body: {
    flex: 1,
    marginTop: 30,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionContent: {
    marginTop: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
});

export default ProfileScreen;
