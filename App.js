import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from "./app/context/AuthContext";
import { useFonts } from "expo-font";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Delete from "./pages/Delete";
import Newnote from "./pages/Newnote";
import Readnote from "./pages/Readnote";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { Note } from "./app/data/NoteData";

export default function App() {
  const [user, setUser] = useState(true);
  const [NoteList, setNoteList] = useState([]);
  const [color, setColor] = useState("");
  const [NewNote, setNewNote] = useState({
    id: 0,
    title: "",
    text: "",
    bgcolor: color,
  });
  const [isLoaded] = useFonts({
    otama: require("./assets/font/Otama-ep.otf"),
    roboto: require("./assets/font/Roboto-Regular.ttf"),
  });

  if (!isLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          NoteList,
          setNoteList,
          NewNote,
          setNewNote,
          color,
          setColor,
        }}
      >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          {user ? (
            <>
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Newnote"
                component={Newnote}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Readnote"
                component={Readnote}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Delete"
                component={Delete}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  headerShown: false, // Removes the default header introduced by the Navigator
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  headerShown: false,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
