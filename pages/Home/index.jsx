import { Text, Image, SafeAreaView, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import AuthContext from "../../app/context/AuthContext";
import styles from "./Home.style";

const Home = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const HandleNav = () => {
    user ? navigation.navigate("Dashboard") : navigation.navigate("SignIn");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/svg.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.Maintext}>All thoughts. One place.</Text>
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

export default Home;
