import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screen/Detail";

const Stack = createNativeStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        component={Detail} 
        name="Detail"
        options={{
          headerShown:false
        }} 
        />
    </Stack.Navigator>
  );
};

export default DetailStack;
