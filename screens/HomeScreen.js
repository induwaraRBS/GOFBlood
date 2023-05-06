import { StyleSheet, Text, View ,SafeAreaView, Alert,Pressable,Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from "expo-location";
import { Ionicons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Steps from '../components/Steps';
import { ImageBackground } from 'react-native';



const HomeScreen = () => {

    const[displayCurrentAddress,setdisplayCurrnetAddress] = useState("We are Loading Your Location");
    const[locationServicesEnabled,setlocationServicesEnabled] = useState(false);

    useEffect(()=>{
        checkIfLocationEnabled();
        getCurrentLocation();
    },[])
    const checkIfLocationEnabled = async() => {
        let enabled = await Location.hasServicesEnabledAsync();
        if(!enabled){
            Alert.alert(
                "Location Services not enabled",
                "Please enable the location services",
                [
                    {
                        text:"Cancel",
                        onPress: () => console.log ("Cancel Pressed"),
                        style:"cancel"
                    },
                    {text:"OK",
                     onPress:()=> console.log("OK Pressed")   
                }   
                ],
                {cancelable:false}
            );
        }
        else{
            setlocationServicesEnabled(enabled)
        }
    }

    const getCurrentLocation = async () => {
        let{status} = await Location.requestForegroundPermissionsAsync();

        if(status !== "granted"){
            Alert.alert(
                "Permission denied",
                "Allow the app to use the location services",
                [
                    {
                        text:"Cancel",
                        onPress: () => console.log ("Cancel Pressed"),
                        style:"cancel"
                    },
                    {text:"OK",
                     onPress:()=> console.log("OK Pressed")   
                }   
                ],
                {cancelable:false}
            );
        };

        const {coords} = await Location.getCurrentPositionAsync();
        // console.log(coords);
        if(coords){
            const{latitude,longitude} = coords;

            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            // console.log(response)

            for(let item of response){
                let address = `${item.name} ${item.city} ${item.postalCode}`;
                setdisplayCurrnetAddress(address)
            }
        }




    }
  return (
    <ImageBackground source={require('../assets/redback.jpg')} style={styles.backgroundImage}>

    <SafeAreaView style={styles.container}>
        
        <View style={{flexDirection:"row",alignItems:"center",padding:10}}>
        <Ionicons name="ios-location" size={30} color="white" />
            <View>
                <Text style={{fontSize:18,fontWeight:"600"}}>location</Text>
                <Text>{displayCurrentAddress}</Text>
            </View>
           
        <Pressable style={{marginLeft:"auto",marginRight:7}}>
            <Image style={{width:50,height:50,borderRadius:25}} source = {{uri:"https://static.vecteezy.com/system/resources/previews/007/063/118/original/blood-drop-isolated-on-white-background-free-vector.jpg"}}/>
        </Pressable>
        
        </View>
        {/* Banner */}
            <Carousel/>
        
        
                <Steps/>
        
        {/* Steps */}
            
    </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
       
      },
})