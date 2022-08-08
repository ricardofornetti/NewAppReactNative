import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "../stack/HomeStack";
import DetailStack from "../stack/DetailStack";
import { Color } from "../../constantes/Color";
import { Platform } from "react-native";
import CustomComponent from "../../componentes/CustomComponent/CustomComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingStack from "../stack/SettingStack";
import OrderWorkStack from "../stack/OrderWorkStack";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Color.primary : Color.accent,
        },
        headerTintColor: Platform.OS === "android" ? Color.second : "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveBackgroundColor: Color.primary,
        drawerInactiveTintColor: Color.second,
      }}
      drawerContent={(props) => <CustomComponent {...props} />}
    >
      <Drawer.Screen
        name="Inicio"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => <Ionicons name="md-home" size={24} />,
        }}
      />
      <Drawer.Screen
        name="Cargar Orden de Trabajo"
        component={OrderWorkStack}
        options={{
          drawerIcon: ({ focused }) => <Ionicons name="md-folder-open" size={24} />,
        }}
      />

      <Drawer.Screen
        name="Ajustes"
        component={SettingStack}
        options={{
          drawerIcon: ({ focused }) => <Ionicons name="md-settings" size={24} />,
        }}
      />

      <Drawer.Screen
        name="Detalles"
        component={DetailStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons name="md-person" size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
