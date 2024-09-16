import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function Slide3() {
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [showPassword, setShowPassword] = useState(false)


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleSenhaChange = (event) => {
    setSenha(event);
  };
  const handleSenha2Change = (event) => {
    setSenha2(event);
  };

  return (
    <View style={styles.slide}>
      <View style={styles.slideContent}>
      <AntDesign name="arrowleft" size={24} style={styles.titleIcon} />
        <Text style={styles.title}>Voltar</Text>
      </View>
      <View style={styles.inputContent}>
        <Text style={styles.nome}>Senha:</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={handleSenhaChange}
          value={senha}
          onPress={toggleShowPassword}
          secureTextEntry={!toggleShowPassword}
        />
        <Text style={styles.nome}>Repita sua senha:</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={handleSenha2Change}
          value={senha2}
        />
      </View>
    </View>
  );
}
