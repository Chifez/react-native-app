import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
    paddingVertical: 50,
    paddingHorizontal: 15,
    // backgroundColor: "green",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",

    width: "100%",
    marginTop: 10,
  },
  image: {
    display: "flex",
    justifyContent: "center",
    height: "45%",
  },
  mainText: {
    fontFamily: "otama",
    fontSize: 50,
    textAlign: "center",
    lineHeight: 55,
    marginBottom: 10,
  },
  subText: {
    color: "#686868",
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
    lineHeight: 25,
    marginBottom: 15,
  },
  deleteBtn: {
    backgroundColor: "#FFE3E3",
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 30,
    elevation: 1,
    height: 55,
    display: "flex",
    justifyContent: "center",
  },
  deleteBtnText: {
    color: "#D35E5E",
    fontWeight: "600",
    fontFamily: "roboto",
    textTransform: "none",
    fontSize: 16,
  },
});
export default styles;
