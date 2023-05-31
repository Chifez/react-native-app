import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#841584",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default Button;
