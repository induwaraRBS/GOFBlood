import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function loginScreen() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigation = useNavigation()

  //   useEffect(() => {
  //       const unsubscribe = auth.onAuthStateChanged(user => {
  //         if (user) {
  //           navigation.navigate("Login");
  //         }
  //       });
    
  //       return () => {
  //         unsubscribe(); // Unsubscribe or remove any necessary subscription or event listener
  //       };
  //     }, []);
    

  // const handleLogin = () => {
  //   auth
  //   .signInWithEmailAndPassword(email,password)
  //   .then(userCredentials =>{
  //       const user = userCredentials.user;
  //       console.log('Logged in With:',user.email);
  //   })
  //   .catch(error => alert(error.message))
  // }
 
 
 
  return (
    <ImageBackground source={require('../assets/redback.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Gift Of Blood</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text =>setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.button}  >
         
            <Text style={styles.buttonText} >Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000',
    textAlign: 'center',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxWidth: 350,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#d72323',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default loginScreen;