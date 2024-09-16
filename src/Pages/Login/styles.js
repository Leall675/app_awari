import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 35,
  },
  topHeader: {
    height: 65,
    width: "100%",
    backgroundColor: "#0001"
  },

  loginTitle: {
    marginTop: 10,
    color: "#1673FA",
    fontSize: 48,
    fontWeight: 'bold'
    
  },
  sejaBemVindos: {
    color: "#000000",
    fontSize: 32,
  },
  formLogin: {
    width: '100%',
    marginTop: 30,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 4,
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 7,
  },
  input: {
    height: 54,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  conectadoAndSenha: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  manterConectado: {
    fontSize: 14,
    fontWeight: "500"

  },
  esqueceuSenha: {
    fontSize: 14,
    color: "#000000",
    opacity: 0.74,
  },
  lineSenha: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    opacity: 0.74,
  },
  button: {
    width: 158,
    height: 41,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  contentRegistre: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 7,
    opacity: 0.74,
    marginTop: 10
  },  
  naoTemConta: {
    fontSize: 14,
  },
  registrarAgora: {
    fontWeight: "700"
  },
  contentLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    opacity: 0.30,
  },
  lineOU: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  textOU: {
    fontSize: 13,
    marginHorizontal: 10,
    color: 'black',
  },
  contentBtnRedes: {
    gap: 10
  },
  buttonTextRedes: {
    fontSize: 15,
    color: '#fff',
  },
  btnLoginFacebook: {
    width: "100%",
    height: 41,
    backgroundColor: '#0084F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: "center",
  },
  btnLoginGoogle: {
    width: "100%",
    height: 41,
    backgroundColor: '#CF4332',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: "center",
  },
  btnLoginTwitter: {
    width: "100%",
    height: 41,
    backgroundColor: '#3AA0D0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: "center",
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    position: 'relative'
  },
  iconPassword: {
    position: 'absolute',
    top: -10,
    left: -30
  }

});