import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, ImageComponent, Button } from 'react-native';
import {Gstyle} from "./Gstyle"
import Swiper from 'react-native-deck-swiper';
import React, { useState }  from 'react';
import ImageCountSlider from './components/ImageCountSlider';
import Card from './components/Card';

export default function App() {
  
  const data = [
    {name: "myanmar girl", id: 1, image: [
      require("./assets/images/mygirl.jpg"),
      require("./assets/images/mygirl1.jpg"),
    ]},
    {name: "japan girl", id: 2, image: [
      require("./assets/images/jpgirl.png"),
      require("./assets/images/jpgirl2.jpg")
    ]}
  ];

  
  return (
     <View style={Styles.container}>
      <Swiper
        containerStyle={{backgroundColor: "transparent"}}
        cards={data}
        stackSize={5}
        cardIndex={0}
        animateCardOpacity
        verticalSwipe={false}
        renderCard={(card) =>< Card card={card}/>}
      />
     </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
})