import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIAS } from "../data/categorias";
import GridItem from "../componentes/GridItem/GridItem";
import Boton from "../constantes/Boton";

const CategoriasScreen = ({ navigation }) => {
  
  const SeleccionarCategoria = (item) => {
    navigation.navigate("Tipos Estructura", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={SeleccionarCategoria} />
  );

  return (
    <View>
      <FlatList
        data={CATEGORIAS}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <View style={styles.categoriesButon}>
        <Boton
          onPress={() => {
            navigation.navigate("Inicio");
          }}
          text="Volver a Inicio"
        ></Boton>
      </View>
    </View>
  );
};

export default CategoriasScreen;

const styles = StyleSheet.create({
  categoriesButon: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
