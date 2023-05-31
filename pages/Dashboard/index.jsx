import { Text, View, Button } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title=" go to Delete"
        onPress={() => navigation.navigate("Delete")}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Dashboard;