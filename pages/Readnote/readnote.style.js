import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingVertical: 50, //change this to a suitable padding value later
    paddingHorizontal: 15,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
  },
  main: { paddingBottom: 35 },
  maintitle: {
    fontFamily: "otama",
    fontSize: 38,
    textTransform: "capitalize",
    paddingVertical: 10,
  },
  maindate: {
    fontSize: 16,
    color: "gray",
    fontWeight: "350",
  },
  body: {
    paddingBottom: 50,
  },
  bodytext: {
    textAlign: "justify",
    fontFamily: "roboto",
    lineHeight: 25,
    fontSize: 16,
  },
});
export default styles;
