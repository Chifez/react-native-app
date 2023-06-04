import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    position: "relative",
    marginVertical: 20,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "60%",
  },
  image: { marginRight: 25 },
  Maintext: {
    fontFamily: "otama",
    fontSize: 50,
    textAlign: "center",
    lineHeight: 55,
    marginBottom: 20,
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
    bottom: 2,
    fontWeight: 100,
    // marginTop: 8,
  },
});
export default styles;
