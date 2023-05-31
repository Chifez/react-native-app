import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "./component/Button";

export default function App() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username"
        value={userData.username}
        onChangeText={(text) => setUserData({ [userData.username]: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="password"
        value={userData.password}
        onChangeText={(text) => setUserData({ [userData.password]: text })}
        style={styles.input}
      />
      <View style={styles.buttonView}>
        <Button onPress={onPress} title="login" />
        {/* <Button
          title="L0gin"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A5ACD",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 45,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#fff",
    fontSize: 18,
  },
  buttonView: {
    width: "60%",
  },
});
