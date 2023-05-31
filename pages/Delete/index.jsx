import { Text, View, Button } from "react-native";

const Delete = ({ navigation }) => {
  return (
    <View>
      <Text>Delete</Text>
      <Button
        title=" go to Readnote"
        onPress={() => navigation.navigate("Readnote")}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Delete;
