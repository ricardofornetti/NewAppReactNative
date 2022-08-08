import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import user from "../../assets/img/user.jpg";

const CustomComponent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding:20 }}>
        
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <Image
            source={user}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </View>
        <Text style={{textAlign:"left"}}>Ricardo Fornetti</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomComponent;
