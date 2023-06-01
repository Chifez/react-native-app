import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Delete from "./pages/Delete";
import Newnote from "./pages/Newnote";
import Readnote from "./pages/Readnote";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    otama: require("./assets/font/Otama-ep.otf"),
  });

  if (!isLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Newnote" component={Newnote} />
        <Stack.Screen name="Readnote" component={Readnote} />
        <Stack.Screen name="Delete" component={Delete} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your apppp!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
