import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MyDrawer from './navegacion/drawer/index';


import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [loaded] = useFonts({
    PTSansNarrowBold: require("./assets/fonts/PTSansNarrow-Bold.ttf"),
    PTSansNarrowRegular: require("./assets/fonts/PTSansNarrow-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />

  return (

    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
    
  );
}

