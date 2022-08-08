import React from "react";
import { Text, ImageBackground, View, StyleSheet } from "react-native";
import logoEdemsa from "../../assets/img/logoEdemsa.jpg";
import Boton from '../../constantes/Boton';

const Home = () => {
  return (
    <View style={styles.header}>
      <Text>Home</Text>
      <ImageBackground
        source={logoEdemsa}
        style={{ width: "100%", height: "70%" }}
      >
      </ImageBackground>
      <Boton 
        text="Cerrar Sesion"
      />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 800,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
});
