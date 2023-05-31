import { Text, View, Button } from "react-native";

const Newnote = ({ navigation }) => {
  return (
    <View>
      <Text>Newnote</Text>
      <Button
        title="go to delete"
        onPress={() => navigation.navigate("Delete")}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Newnote;
