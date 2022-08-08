import React from "react";
import { FlatList } from "react-native";
import GridItem from "../../componentes/GridItem/GridItem";
import { CATEGORIAS } from "../../data/categorias";

const OrderWork = ({ navigation }) => {

  const handleSelectedCategory = (item) => {
    navigation.navigate("Stucture Types", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={CATEGORIAS}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default OrderWork;
