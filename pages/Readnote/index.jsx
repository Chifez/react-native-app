import { Text, View, Button } from "react-native";

const Readnote = ({ navigation }) => {
  return (
    <View>
      <Text>Readnote</Text>
      <Button
        title=" go to Newnote"
        onPress={() => navigation.navigate("Newnote")}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Readnote;
