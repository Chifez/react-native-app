import { Text, View, SafeAreaView, Image } from "react-native";
import { useContext } from "react";
import AuthContext from "../../app/context/AuthContext";
import styles from "./delete.style";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../component/Button";

const Delete = ({ route, navigation }) => {
  const {
    itemID: { id },
  } = route.params;
  const { NoteList, setNoteList } = useContext(AuthContext);

  const Handledelete = (id) => {
    const NewNoteList = NoteList.filter((item) => item.id !== id);
    setNoteList(NewNoteList);
    console.log(NoteList);
    console.log(NewNoteList);
    return navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="leftcircle"
          size={45}
          color="black"
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.image}>
        <Image source={require("../../assets/hero.png")} resizeMode="cover" />
      </View>
      <Text style={styles.mainText}>You sure about this?</Text>
      <Text style={styles.subText}>
        if you delete this note fear not, it can still be recovered in your bin
      </Text>
      <Button
        title="delete this note"
        onPress={() => Handledelete(id)}
        styleMain={styles.deleteBtn}
        styleTitle={styles.deleteBtnText}
      />
    </SafeAreaView>
  );
};

export default Delete;
