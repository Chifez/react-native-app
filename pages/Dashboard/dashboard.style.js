import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingVertical: 50,
    paddingHorizontal: 15,
    height: "100%",
    backgroundColor: "#dbe2f0",
  },
  header: {
    marginTop: 10,
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },

  searchInput: {
    position: "relative",
    flex: 1,
    borderColor: "#686868",
    borderWidth: 1.5,
    borderRadius: 40,
    backgroundColor: "transparent",
    paddingLeft: 20,
    paddingRight: 90,
    paddingVertical: 12,
    marginRight: 10,
    fontSize: 18,
  },
  searchIconContainer: {
    position: "absolute",
    right: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 200,
    zIndex: 2,
    width: 80,
    height: 45,
    margin: 5,
  },
  searchIcon: {
    color: "white",
  },
  NoteListContainer: {
    width: 70,
    borderColor: "green",
    borderBottomWidth: 4,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  NoteList: {
    fontFamily: "roboto",
    fontSize: 23,
  },
  emptyContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    textAlign: "center",
    paddingBottom: 200,
  },
  empty: {
    fontSize: 25,
    fontStyle: "italic",
  },
  cards: {
    flex: 1,
    // width: 500,
    // gap: 5,
  },
  add: {
    position: "absolute",
    right: 10,
    bottom: "10%",
    color: "green",
  },
});
export default styles;
