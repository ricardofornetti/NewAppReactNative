import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderWork from "../screen/OrderWork";
import { StructureScreen } from "./StructureScreen"
import StructureDetailScreen from "./StructureDetailScreen";

const Stack = createNativeStackNavigator();

const OrderWorkStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={OrderWork}
        name="Order Work"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Stucture Types"
        component={StructureScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />

<Stack.Screen
        name="Detalle de Estructura"
        component={StructureDetailScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default OrderWorkStack;
