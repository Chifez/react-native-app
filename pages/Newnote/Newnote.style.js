import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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
  inputContainer: {
    height: "83%",
  },
  inputTitle: {
    borderColor: "#686868",
    borderWidth: 1.5,
    borderRadius: 40,
    backgroundColor: "transparent",
    paddingLeft: 20,
    paddingVertical: 12,
    marginVertical: 10,
    fontSize: 18,
  },
  inputText: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "",
    padding: 10,
    fontSize: 18,
  },
  addContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    color: "green",
  },
});
export default styles;
