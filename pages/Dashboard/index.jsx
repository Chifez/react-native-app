import { Text, View, TextInput, FlatList } from "react-native";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import Card from "../../component/Card";
import styles from "./dashboard.style";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../app/context/AuthContext";

const Dashboard = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleSearch = () => {
    if (searchInput != "") {
      const searchResult = NoteList.filter(
        (List) => List.title.toLowerCase() == searchInput.toLowerCase()
      );
      console.log(searchResult);
      return setSearchList(searchResult);
    } else {
      return;
    }
  };
  const { NoteList } = useContext(AuthContext);

  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="leftcircle"
          size={45}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.searchBox}>
          <TextInput
            placeholder="search notes"
            style={styles.searchInput}
            onChangeText={(text) => setSearchInput(text)}
          />
          <View style={styles.searchIconContainer}>
            <EvilIcons
              name="search"
              size={30}
              color="black"
              style={styles.searchIcon}
              onPress={handleSearch}
            />
          </View>
        </View>
        <View style={styles.NoteListContainer}>
          <Text style={styles.NoteList}>Notes</Text>
        </View>
      </View>
      {searchList == 0 && searchInput !== "" && (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}> No Results </Text>
        </View>
      )}
      {searchInput === "" && NoteList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>empty Note</Text>
        </View>
      ) : (
        <View>
          <FlatList
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 150 }}
            data={searchInput !== "" ? searchList : NoteList}
            renderItem={({ item, index }) => (
              <Card item={item} navigation={navigation} key={item.id} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
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
