import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
// import { Icon } from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import AuthContext from "../../app/context/AuthContext";

const Home = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const HandleNav = () => {
    user ? navigation.navigate("Dashboard") : navigation.navigate("SignIn");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/svg.png")} style={styles.image} />
      <Text style={styles.Maintext}>All thougths one place</Text>
      <Text style={styles.SubText}>
        Dive right in and clear that mind of yours by writing your thougts down
      </Text>
      <AntDesign
        name="rightcircle"
        size={60}
        color="black"
        style={styles.icon}
        onPress={HandleNav}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    position: "relative",
    marginVertical: 40,
  },
  image: {},
  Maintext: {
    fontFamily: "otama",
    fontSize: 58,
    textAlign: "center",
    lineHeight: 58,
    marginTop: 55,
    marginBottom: 25,
  },
  SubText: {
    color: "#686868",
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
    lineHeight: 25,
  },
  icon: {
    position: "absolute",
    bottom: 20,
    fontWeight: 100,
    // marginTop: 8,
  },
});

export default Home;
