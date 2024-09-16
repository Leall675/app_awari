import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Slide1() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event);
  };

  return (
    <View style={styles.slide}>
      <View style={styles.slideContent}>
        <Text style={styles.title}>Crie sua conta</Text>
      </View>
      <View style={styles.inputContent}>
        <Text style={styles.nome}>Nome:</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={handleNameChange}
          value={name}
        />
      </View>
    </View>
    
  );
}
