import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Note } from "../../app/data/NoteData";
import Card from "../../component/Card";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="leftcircle"
          size={40}
          color="black"
          // style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.searchBox}>
          <TextInput placeholder="search notes" style={styles.searchInput} />
          <Button title="search" style={styles.searchIcon} />
        </View>
      </View>
      <ScrollView style={styles.cards}>
        {Note.map((item, idx) => {
          return <Card title={item.title} text={item.text} key={idx} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 15,
  },
  header: {
    marginTop: 50,
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
    // gap: 5,
    marginHorizontal: 10,
  },

  searchInput: {
    flex: 1,
    borderColor: "#686868",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 7,
    marginRight: 10,
    fontSize: 18,
  },
  searchIcon: {
    // paddingHorizontal: 20,
    // paddingVertical: 7,
  },
  cards: {
    display: "flex",
    flexDirection: "column",
  },
});

export default Dashboard;
