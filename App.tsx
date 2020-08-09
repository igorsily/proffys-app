import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppStack from "./src/routes/AppStack";

const App = () => {
  const [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <AppStack />
    </>
  );
};
export default App;
