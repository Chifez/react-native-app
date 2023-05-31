import { Text, View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title=" go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Home;
