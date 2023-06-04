import { Text, View, Button, TextInput, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Newnote = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <AntDesign
          name="leftcircle"
          size={45}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View>
          <TextInput placeholder="Title" maxLength={40} />
          <TextInput placeholder="write your notes here" />
        </View>
      </View>
      <TextInput />
    </SafeAreaView>
  );
};

export default Newnote;
