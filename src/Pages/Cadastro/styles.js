import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  topHeader: {
    height: 80,
    width: "100%",
    backgroundColor: "#0001",
    paddingRight: 30,
    paddingTop: 45,
    alignItems: 'flex-end'
  },
  slide: {
    flex: 1,
    padding: 35,
  },
  slideContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconTitle: {
    fontSize: 20,
    color: '#8493AC',
  },
  title: {
    color: '#8493AC',
    fontSize: 20,
    fontWeight: '400',
  },
  nome: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5
  },
  inputName: {
    height: 54,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    color: '#8493AC'
  },
  inputContent: {
    marginTop: 35,
  },
  buttonContinue: {
    width: 295,
    height: 54,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonContainer: {
    marginBottom: 30,
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },


})