import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

const Card = ({ item, navigation }) => {
  const { title, text, bgcolor, numberDate } = item;
  const handleNavigate = (link) => {
    return navigation.navigate(`${link}`, { itemID: item });
  };
  return (
    <TouchableOpacity
      onPress={() => handleNavigate("Readnote")}
      style={[
        styles.item,
        { backgroundColor: `${bgcolor ? bgcolor : `#93CAED`}` },
      ]}
    >
      <View>
        <Text style={styles.maintext}>{title}</Text>
        <Text>edit</Text> {/*find a suitable icon and style for this*/}
      </View>
      <Text style={styles.subtext} numberOfLines={5}>
        {text}
      </Text>
      <View style={styles.cardfooter}>
        <TouchableOpacity onPress={() => handleNavigate("Delete")}>
          <MaterialCommunityIcons name="delete-outline" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.datetext}>{numberDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    flex: 1,
    width: "45%",
    height: 250,
    borderRadius: 10,
    margin: 3,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "#93CAED",
  },
  maintext: {
    fontFamily: "otama",
    fontSize: 16,
    textTransform: "capitalize",
    textAlign: "left",
    color: "white",
    paddingVertical: 5,
  },
  subtext: {
    color: "#686868",
    textAlign: "justify",
    fontSize: 14,
    paddingVertical: 5,
    color: "white",
    flex: 1,
  },
  cardfooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  datetext: {
    color: "#686868",
    textAlign: "right",
    fontSize: 10,
    color: "white",
  },
});

export default Card;
