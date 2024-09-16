import { View, Text, TextInput, TouchableOpacity } from "react-native";
import  { styles } from "./styles"
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigation = useNavigation()


  const handleEmail = (event) => {
    setEmail(event)
  }
  const handlePassword = (event) => {
    setPassword(event)
  }
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleLogin = () => {
    if (email === "teste@gmail.com" && password === "123456") {
      setErrorMessage(null)
      console.log("Logado")
      
    } else {
      setErrorMessage("Email ou senha incorretos")
    }
  }
  const handleCreateAccount = () => {
    navigation.navigate('Cadastro')
  }


  return (
    <>
      <View style={styles.topHeader}></View>
      <View style={styles.container}>
        <Text style={styles.loginTitle}> Awari </Text>
        <Text style={styles.sejaBemVindos}> Seja Bem-Vindo ! </Text>
        <View style={styles.formLogin}>
        {errorMessage && (
          <Text style={{ color: 'red', marginBottom: 8, marginLeft: 8 }}>{errorMessage}</Text>
        )}
          <Text style={styles.label}>Email:</Text>
          <TextInput 
            style={styles.input}
            keyboardType="email-address"
            onChangeText={handleEmail}
            autoCompleteType="off"
            value={email}
          />
          <Text style={styles.label}>Senha:</Text>
          <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            onChangeText={handlePassword}
            value={password}
            secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={toggleShowPassword}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={15}
                color="#000"
                style={styles.iconPassword}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.conectadoAndSenha}>
          <Text style={styles.manterConectado}> Manter contectado </Text>
          <View>
            <Text style={styles.esqueceuSenha}>Esqueceu a senha ?</Text>
            <View style={styles.lineSenha}></View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}> Entrar </Text>
        </TouchableOpacity>

        <View style={styles.contentRegistre}>
          <Text style={styles.naoTemConta}>Não tem uma conta?</Text>
          <Text style={styles.registrarAgora} onPress={handleCreateAccount}>Registre-se agora</Text>
        </View>

        <View style={styles.contentLine}>
          <View style={styles.lineOU}></View>
          <Text style={styles.textOU}>OU</Text>
          <View style={styles.lineOU}></View>
        </View>
        <View style={styles.contentBtnRedes}>
          <TouchableOpacity style={styles.btnLoginFacebook}>
            <Text style={styles.buttonTextRedes}> Entrar com Facebook </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLoginGoogle}>
            <Text style={styles.buttonTextRedes}> Entrar com Google+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLoginTwitter}>
            <Text style={styles.buttonTextRedes}> Entrar com Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>

  )
}