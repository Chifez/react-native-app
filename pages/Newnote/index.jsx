import { Text, View, Button, TextInput, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useContext } from "react";
import AuthContext from "../../app/context/AuthContext";
import styles from "./Newnote.style";
import { Ionicons } from "@expo/vector-icons";

const Newnote = ({ navigation }) => {
  const [NewNote, setNewNote] = useState({
    id: null,
    title: "",
    text: "",
  });
  const { NoteList } = useContext(AuthContext);
  const bgColours = ["#92a8d1", "#034f84", "#0C134F", "#472183", "#1C315E"];

  const handleSubmit = () => {
    NoteList.push({ ...NewNote });
    console.log(NoteList, NewNote.id);
    console.log(NoteList.length + 1);
    return navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="leftcircle"
          size={45}
          color="black"
          onPress={() => navigation.goBack()}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          maxLength={40}
          style={styles.inputTitle}
          onChangeText={(val) => setNewNote({ ...NewNote, title: val })}
        />
        <TextInput
          placeholder="write your notes here"
          multiline
          style={styles.inputText}
          onChangeText={(val) =>
            setNewNote({
              ...NewNote,
              text: val,
              id: Number(NoteList.length + 1),
            })
          }
        />
      </View>

      <View style={styles.addContainer}>
        <Ionicons
          name="add-circle"
          size={60}
          color="black"
          style={styles.add}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

export default Newnote;
