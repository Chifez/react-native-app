import {
  Text,
  View,
  // Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import { Note } from "../../app/data/NoteData";
import Card from "../../component/Card";
import Button from "../../component/Button";
import styles from "./dashboard.style";
import { useContext, useEffect } from "react";
import AuthContext from "../../app/context/AuthContext";

const Dashboard = ({ navigation }) => {
  const { NoteList, setNoteList } = useContext(AuthContext);

  // useEffect(() => {
  //   setNoteList(NoteList);
  // }, [NoteList]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="leftcircle"
          size={45}
          color="black"
          // style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.searchBox}>
          <TextInput placeholder="search notes" style={styles.searchInput} />
          <View style={styles.searchIconContainer}>
            <EvilIcons
              name="search"
              size={30}
              color="black"
              style={styles.searchIcon}
            />
          </View>
          {/* <Button title="search" style={styles.searchIcon} /> */}
        </View>
        <View style={styles.NoteListContainer}>
          <Text style={styles.NoteList}>Notes</Text>
        </View>
      </View>
      <View>
        {NoteList && (
          <FlatList
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 150 }}
            data={NoteList}
            renderItem={({ item }) => (
              <Card item={item} navigation={navigation} key={item.id} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <Ionicons
        name="add-circle"
        size={60}
        color="black"
        style={styles.add}
        onPress={() => navigation.navigate("Newnote")}
      />
    </View>
  );
};

export default Dashboard;
