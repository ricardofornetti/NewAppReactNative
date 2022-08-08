import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";

export default function AddItem() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const onHandlerChangeItem = (text) => setTextItem(text);

  const onHandlerAddItem = () => {
    setItemList((currentItems) => [
      ...currentItems,
      { id: Date.now(), value: textItem, completed: false },
    ]);
    // setItemList({...itemList, id: Math.random()*10, value: textItem }) => hace lo mismo que la de arriba
    setTextItem("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        placeholder="Ingrese breve Descipción"
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={onHandlerAddItem}
        disabled={textItem.length < 1 ? true : false}
      >
        <Text style={styles.texto}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    
    
  },
  input: {
    width: "70%",
    height: 45,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: "PTSansNarrowRegular",
    marginTop: 50,
  },
  buttonAdd: {
    backgroundColor: "#00bfff",
    marginLeft: 10,
    borderRadius: 10,
    padding: 15,
    marginTop: 50,
  },
  texto: {
    color: "white",
    fontFamily: "PTSansNarrowRegular",
  },
});
