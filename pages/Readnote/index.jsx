import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./readnote.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

const Readnote = ({ route, navigation }) => {
  const [readMode, setReadMode] = useState(false);
  const ToggleMode = () => {
    setReadMode((prev) => !prev);
  };
  const {
    itemID: { title, text },
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="leftcircle"
          size={45}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity onPress={ToggleMode}>
          {readMode ? (
            <MaterialCommunityIcons name="book-check" size={40} color="black" />
          ) : (
            <MaterialCommunityIcons
              name="book-cancel-outline"
              size={40}
              color="black"
            />
          )}
        </TouchableOpacity>
      </View>
      {!readMode && (
        <View style={styles.main}>
          <Text style={styles.maintitle}>{title}</Text>
          <Text style={styles.maindate}>Saturday, 20th of March</Text>
        </View>
      )}
      <ScrollView style={styles.body}>
        <Text style={styles.bodytext}>{text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Readnote;
