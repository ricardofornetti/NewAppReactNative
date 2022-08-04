import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../componentes/Header/Index";
import Boton from "../constantes/Boton";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Mantenimiento EDEMSA</Text>
      <Header style={styles.title} />
      <View style={styles.modalButton}>
        <Boton
          onPress={() => {
            navigation.navigate("Categorias");
          }}
          text="Categorias"
        />

        <Boton
          onPress={() => {
            navigation.navigate("");
          }}
          text="Boton 2"
        />
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 35,
    fontFamily: "PTSansNarrowRegular",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  modalButton: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
