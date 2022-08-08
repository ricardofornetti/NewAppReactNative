import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Setting from "../screen/Setting";

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Setting}
        name="Setting"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
