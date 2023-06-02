import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from "./app/context/AuthContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Delete from "./pages/Delete";
import Newnote from "./pages/Newnote";
import Readnote from "./pages/Readnote";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(true);
  const [isLoaded] = useFonts({
    otama: require("./assets/font/Otama-ep.otf"),
  });

  if (!isLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ user, setUser }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          {user ? (
            <>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Newnote" component={Newnote} />
              <Stack.Screen name="Readnote" component={Readnote} />
              <Stack.Screen name="Delete" component={Delete} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
