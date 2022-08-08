import React from "react";
import { FlatList } from "react-native";
import { ESTRUCTURAS } from "../../data/estrucuturas"
import EstructuraItem from "../../componentes/EstructuraItem/EstructuraItem";

export const StructureScreen = ({ navigation, route }) => {
  const Stucture = ESTRUCTURAS.filter(
    (stucture) => stucture.category === route.params.categoryId
  );

  const handleSelected = (item) => {
    navigation.navigate("Detalle de Estructura", {
      structure: item,
    });
  };

  const renderItemEstructura = ({ item }) => {
    return <EstructuraItem item={item} onSelected={handleSelected} />;
  };
  return (
    <FlatList
      data={Stucture}
      keyExtractor={(item) => item.id}
      renderItem={renderItemEstructura}
    />
  );
};
