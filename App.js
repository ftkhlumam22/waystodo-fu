import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import Routes from "./Routes";

const theme = extendTheme({
  fontConfig: {
    Montserrat: {
      300: {
        normal: "Montserrat_300Light",
      },
      400: {
        normal: "Montserrat_400Regular",
        italic: "Montserrat_400Regular_Italic",
      },
      600: {
        normal: "Montserrat_600SemiBold",
        italic: "Montserrat_600SemiBold_Italic",
      },
      700: {
        normal: "Montserrat_700Bold",
      },
    },
  },

  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let isLogin = false;

  return (
    <NativeBaseProvider theme={theme}>
      <Routes isLogin={isLogin} />
    </NativeBaseProvider>
  );
}
