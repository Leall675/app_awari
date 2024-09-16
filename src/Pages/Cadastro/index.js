import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from 'react';
import { styles } from "./styles";
import AppIntroSlider from "react-native-app-intro-slider";
import { Slide1 } from '../../Components/CadastroSlider/Slide1'
import { Slide2 } from '../../Components/CadastroSlider/Slide2'
import { Slide3 } from '../../Components/CadastroSlider/Slide3'

const slides = [
  { key: '1', titlePage: 'Crie sua conta' },
  { key: '2', titlePage: 'Voltar' },
  { key: '3', titlePage: 'Voltar' },
];


export function Cadastro() {


  const renderSlide = ({ item }) => {
    switch (item.key) {
      case '1':
        return <Slide1 />;
      case '2':
        return <Slide2 />;
      case '3':
        return <Slide3 />;
      default:
        return null;
    }
  };


  return (
    <>
      <View style={styles.topHeader}>
        <Image source={require('./../../../assets/logoTop.png')} />
      </View>

      <View style={styles.container}>
        <AppIntroSlider
          data={slides}
          renderItem={renderSlide}
          activeDotStyle={{
            backgroundColor: '#1673FA',
            width: 20,
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonContinue}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>

    </>
  );
}
