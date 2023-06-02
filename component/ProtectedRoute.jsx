import { useState } from "react";
import { View } from "react-native-web";

const ProtectedRoute = ({ children, navigation }) => {
  return <View>{user ? { children } : navigation.navigate("signIn")}</View>;
};

export default ProtectedRoute;
