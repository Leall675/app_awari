import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function Slide2() {
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [errorEqual, setErrorEqual] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event);
  };
  const handleEmail2Change = (event) => {
    setEmail2(event);
  };
  const verifyEmail = () => {
    if (email === email2) {
      setErrorEqual(null)
    } else {
      setErrorEqual("Os emails devem ser iguais")
    }

  }

  return (
    <View style={styles.slide}>
      <View style={styles.slideContent}>
      <AntDesign name="arrowleft" size={24} style={styles.titleIcon} />
        <Text style={styles.title}>Voltar</Text>
      </View>
      <View style={styles.inputContent}>
        <Text style={styles.nome}>Email:</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={handleEmailChange}
          value={email}
        />
        <Text style={styles.nome}>Repita seu email:</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={handleEmail2Change}
          value={email2}
        />
        {errorEqual && (
          <Text style={{ color: 'red', marginBottom: 8, marginLeft: 8 }}>{errorEqual}</Text>
        )}
      </View>
    </View>
  );
}
