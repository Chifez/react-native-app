import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, title, styleMain, styleTitle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, styleMain]}
    >
      <Text style={[styles.text, styleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "green",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default Button;
