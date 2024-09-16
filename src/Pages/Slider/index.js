import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from '@react-navigation/native';

  const slides = [
    {
      key: '1',
      title: 'Comece seu futuro agora...',
      text: 'A awari é uma plataforma\n completa para sua carreira.',
      image: require('../../../assets/slider_1.png'),
      image2: require('../../../assets/slider_1_pessoa.png')
    },
    {
      key: '2',
      title: 'Mentorias individuais',
      text: 'Faça mentorias com os melhores\n profissionais do mercado',
      image: require('../../../assets/slider_2.png'),
      image2: require('../../../assets/slider_2_pessoas.png')
    },
    {
      key: '3',
      title: 'Dê o próximo passo',
      text: 'Receba apoio em sua carreira,\n com consultorias individuais',
      image: require('../../../assets/slider_3.png'),
      image2: require('../../../assets/slider_3_pessoas.png')
    }
  ]

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.goToSlide(index);
      setCurrentIndex(index);
    }
  };

  const handleContinuePress = () => {
    if (currentIndex < slides.length - 1) {
      setLoading(true);
      setTimeout(() => {
        goToSlide(currentIndex + 1);
        setLoading(false);
      }, 1000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Login');
      }, 1000);
    }
  };

  const renderSlide = ({ item }) => {
    let slideStyles = {};
    let titleStyles = {};
    let textStyles = {};
    let imageStyles = {};
    let image2Styles = {};

    if (item.key === '1') {
      slideStyles = styles.slideType1;
      titleStyles = styles.titleType1;
      textStyles = styles.textType1;
      imageStyles = styles.imageType1;
      image2Styles = styles.image2Type1;
    } else if (item.key === '2') {
      slideStyles = styles.slideType2;
      titleStyles = styles.titleType2;
      textStyles = styles.textType2;
      imageStyles = styles.imageType2;
      image2Styles = styles.image2Type2;
    } else if (item.key === '3') {
      slideStyles = styles.slideType3;
      titleStyles = styles.titleType3;
      textStyles = styles.textType3;
      imageStyles = styles.imageType3;
      image2Styles = styles.image2Type3;
      } else {
      // Estilo padrão caso nenhum tipo específico for passado
      slideStyles = styles.slide;
      titleStyles = styles.title;
      textStyles = styles.text;
      imageStyles = styles.image;
      image2Styles = styles.image2;
      }

    return (
      <View style={[styles.slide, slideStyles]}>
        <Text style={[styles.title, titleStyles]}>{item.title}</Text>
        <Text style={[styles.text, textStyles]}>{item.text}</Text>
        <Image source={item.image} style={[styles.image, imageStyles]} />
        <Image source={item.image2} style={[styles.image2, image2Styles]} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.topHeader}>
        <Image 
          source={require('./../../../assets/logoTop.png')} 
        />
      </View>
      <View style={styles.container}>
        <AppIntroSlider 
          ref={sliderRef}
          renderItem={renderSlide}
          data={slides}
          activeDotStyle={{
            backgroundColor: '#1673FA',
            width: 20
          }}
          onSlideChange={(index) => setCurrentIndex(index)}
          keyExtractor={(item) => item.key}

        />
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress} disabled={loading}>
          {loading ? ( <ActivityIndicator size="small" color="#ffffff" /> ) : ( <Text style={{ color: '#ffffff' }}>Continuar</Text> )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
