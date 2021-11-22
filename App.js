import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/location.context";





export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  let [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>

        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  </>;
}
