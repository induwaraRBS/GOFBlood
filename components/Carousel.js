import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images =[
 
    "https://wallpaperaccess.com/full/6553585.jpg",
    "https://i2.wp.com/businessday.ng/wp-content/uploads/2020/06/World-Blood-Donor-Day.jpg?fit=1024%2C683&ssl=1",
  ];
  return (
    <View>
    <SliderBox images={images} autoPlay circleLoop dotColor={'#13274F'} inactiveDotColor="#90A4AE" ImageComponentStyle={{
      borderRadius:6,
      width:"94%",

    }} />
    </View>
  );
}

export default Carousel

const styles = StyleSheet.create({
})