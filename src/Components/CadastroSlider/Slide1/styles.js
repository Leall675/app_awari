import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
})