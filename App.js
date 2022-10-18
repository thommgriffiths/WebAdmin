import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/pantallas/LoginScreen";
import HomeScreen from "./src/pantallas/HomeScreen";
import TestComponentScreen from "./src/testScreens/TestComponentScreen";
import TestVerObras from "./src/testScreens/TestVerObras";
import TestCrearObra from "./src/testScreens/TestCrearObra";
import TestUpdateScreen from "./src/testScreens/TestUpdateScreen";
import ObraDetailScreen from "./src/testScreens/ObraDetailScreen";
import CrearJornal from "./src/testScreens/CrearJornal";
import PedidoReintegro from "./src/testScreens/PedidoReintegro";

import MockLoginScreen from "./src/testScreens/MockLoginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TestComponent"
            component={TestComponentScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TestVerObras"
            component={TestVerObras}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TestCrearObra"
            component={TestCrearObra}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ObraDetailScreen"
            component={ObraDetailScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="CrearJornalScreen"
            component={CrearJornal}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="PedidoReintegroScreen"
            component={PedidoReintegro}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="TestUpdateScreen"
            component={TestUpdateScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
