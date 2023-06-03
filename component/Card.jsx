import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = ({ title, text }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{text}</Text>
      <Text>22/01/2023</Text>
    </View>
  );
};

export default Card;
