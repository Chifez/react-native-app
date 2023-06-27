import { View, TextInput, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../app/context/AuthContext";
import styles from "./Newnote.style";
import { Ionicons } from "@expo/vector-icons";

const Newnote = ({ navigation }) => {
  const { NoteList, setNoteList, NewNote, setNewNote, setColor, color } =
    useContext(AuthContext);
  const bgColours = ["#92a8d1", "#034f84", "#0C134F", "#472183", "#1C315E"];
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
    return setNewNote(
      ((NewNote.textDate = TextDate), (NewNote.numberDate = NumberDate))
    );
  };
  const generateBg = () => {
    setColor(bgColours[Math.floor(Math.random() * 5)]);
    console.log(color);
    return setNewNote((NewNote.bgcolor = color));
  };

  const handleSubmit = () => {
    if (NewNote.title == "" && NewNote.text == "") {
      return alert("cannot add incomplete note");
    } else {
      generateBg();
      getNoteDate();
      setNoteList([...NoteList, NewNote]);
      console.log(NoteList, NewNote);
      console.log(NewNote.bgcolor);
      console.log(NoteList.length + 1);
    }
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
          textAlignVertical="top"
          style={styles.inputText}
          onChangeText={(val) =>
            setNewNote({
              ...NewNote,
              text: val,
              id: Number(NoteList.length + 1),
              // bgcolor: generateBg(),
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
