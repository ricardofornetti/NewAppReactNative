import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import ShopNavigation from "./navegacion/ShopNavigation";

export default function App() {
  const [loaded] = useFonts({
    PTSansNarrowBold: require("./assets/fonts/PTSansNarrow-Bold.ttf"),
    PTSansNarrowRegular: require("./assets/fonts/PTSansNarrow-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />

  return (
    <ShopNavigation>
      <View style={styles.screen}></View>
      <StatusBar style="auto" />
    </ShopNavigation>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: "10%",
    padding: 30,
    flex: 1,
  }
});
