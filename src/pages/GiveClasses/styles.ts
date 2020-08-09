import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9871F5",
  },
  content: {
    marginTop: 60,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    textAlign: "center",
    fontSize: 28,
    marginVertical: 40,
  },
  description: {
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    textAlign: "center",
    marginHorizontal: 40,
  },
  okButton: {
    backgroundColor: "#04D361",
    height: 75,
    width: "48%",
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
  },

  okButtonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
