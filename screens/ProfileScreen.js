import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';

function ProfileScreen() {
  const [user, setUser] = useState(null);
  const route = useRoute();
  const email = route.params.user.email;

  useEffect(() => {
    const getUserData = async () => {
      const q = query(collection(db, 'users'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs.map((doc) => doc.data())[0];
      setUser(userData);
    };
    getUserData();
  }, [email]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground source={require('../assets/drop.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{user.firstName} {user.LastName}</Text>
        <Text style={styles.info}>Email:{user.email}</Text>
        <Text style={styles.info}>NIC: {user.nicNumber}</Text>
      </View>
      <View style={styles.body}>
      <View style={styles.row}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{user.firstName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.value}>{user.lastName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Blood Type:</Text>
          <Text style={styles.value}>{user.bloodGroup}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Weight:</Text>
          <Text style={styles.value}>{user.weight}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Height:</Text>
          <Text style={styles.value}>{user.height}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{user.dateOfBirth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{user.location}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Password:</Text>
          <Text style={styles.value}>{user.password}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>NIC:</Text>
          <Text style={styles.value}>{user.nicNumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Contact:</Text>
          <Text style={styles.value}>{user.contact}</Text>
        </View>
      </View>
    </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f2f2f2',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  page:{
    marginLeft:5,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  body: {
    marginTop:30,
    marginLeft:30,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#999',
    marginBottom: 5,
  },
  row: {
    marginTop:5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    flex: 2,
    fontSize: 18,
    color: '#666',
  },
});

export default ProfileScreen;