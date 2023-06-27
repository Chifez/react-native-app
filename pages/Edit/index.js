import { View, TextInput, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../app/context/AuthContext";
import styles from "./Editnote.style";
import { Ionicons } from "@expo/vector-icons";

const Editnote = ({ route, navigation }) => {
  const {
    itemID: { id, title, text, textDate, numberDate },
  } = route.params;

  const [editNote, setEditNote] = useState({
    editTitle: title,
    editText: text,
    editNumberDate: numberDate,
    editTextDate: textDate,
  });

  const { editTitle, editText, editNumberDate, editTextDate } = editNote;

  const { NoteList, setNoteList } = useContext(AuthContext);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getNoteDate = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    const day = d.getDay();
    const prefixedDay = function ordinal_suffix_of(i) {
      var j = i % 10,
        k = i % 100;
      if (j == 1 && k != 11) {
        return i + "st";
      }
      if (j == 2 && k != 12) {
        return i + "nd";
      }
      if (j == 3 && k != 13) {
        return i + "rd";
      }
      return i + "th";
    };
    const NumberDate = `${date}/${month > 9 ? month : "0" + month}/${year}`;
    const TextDate = `${days[day]},${prefixedDay(date)} of ${months[month]} `;
    console.log(year, month, date, day);
    console.log(NumberDate, TextDate);
    return setEditNote(
      ((editNote.editTextDate = TextDate),
      (editNote.editNumberDate = NumberDate))
    );
  };

  const handleSubmit = () => {
    getNoteDate();
    const updatedNote = NoteList.filter((notes) => notes.id === id);
    setNoteList([
      ...NoteList,
      ((updatedNote.id = id),
      (updatedNote.title = editTitle),
      (updatedNote.text = editText),
      (updatedNote.numberDate = editNumberDate),
      (updatedNote.textDate = editTextDate)),
    ]);
    console.log(NoteList);
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
          value={editTitle}
          style={styles.inputTitle}
          onChangeText={(val) => setEditNote({ ...editNote, editTitle: val })}
        />
        <TextInput
          placeholder="write your notes here"
          multiline
          textAlignVertical="top"
          value={editText}
          style={styles.inputText}
          onChangeText={(val) =>
            setEditNote({
              ...editNote,
              editText: val,
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
          onPress={() => handleSubmit()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Editnote;
