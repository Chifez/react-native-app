import { Text, View, Button, Image, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/svg.png")} />
      <Text style={styles.Maintext}>All thougths one place</Text>
      <Text style={styles.SubText}>
        Dive right in and clear that mind of yours by writing your thougts down
      </Text>
      <Button
        title="go to next page"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
  image: {},
  Maintext: {
    fontFamily: "otama",
    fontSize: 60,
    textAlign: "center",
    lineHeight: 58,
    marginTop: 45,
    marginBottom: 25,
  },
  SubText: {
    color: "#686868",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
  },
});

export default Home;
