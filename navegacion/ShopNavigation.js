import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Color } from "../constantes/Color";
import MenuScreen from "../screen/MenuScreen";
import CategoriasScreen from "../screen/CategoriasScreen";
import {EstructurasScreen} from "../screen/EstructurasScreen";
import EstructuraDetalle from "../screen/EstructuraDetalle";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primary : Color.accent,
          },
          headerTintColor: Platform.OS === "android" ? Color.second : "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen 
          name="Inicio"
          component={MenuScreen}
          options={{title:"Inicio"}}
        />

        <Stack.Screen 
          name="Categorias"
          component={CategoriasScreen}
          options={{title:"Categorias"}}
        />

        <Stack.Screen 
          name="Tipos Estructura"
          component={EstructurasScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />

        <Stack.Screen 
          name="Detalle Estructura"
          component={EstructuraDetalle}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
   
  );
};


export default ShopNavigator;

