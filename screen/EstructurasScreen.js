import React from "react";
import { FlatList } from "react-native";
import { ESTRUCTURAS } from "../data/estrucuturas";
import EstructuraItem from "../componentes/EstructuraItem/EstructuraItem";

export const EstructurasScreen = ({ navigation, route }) => {
  const Estructura = ESTRUCTURAS.filter(
    (estructura) => estructura.category === route.params.categoryId
  );
  
  console.log(Estructura) 
  const SeleccionEstructura = (item) => {
    navigation.navigate("Detalle Estructura", {
      estructura: item,
    });
  };

  const renderItemEstructura = ({ item }) => {
    <EstructuraItem item={item} onSelected={SeleccionEstructura} />;
  };

  return (
    <FlatList
      data={Estructura}
      keyExtractor={(item) => item.id}
      renderItem={renderItemEstructura}
    />
  );
};



