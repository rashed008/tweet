import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 56,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },

  leftIcon: {
    position: "absolute",
    left: 16,
  },

  rightButton: {
    position: "absolute",
    right: 16,
  },

  headerTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  scrollContent: {
    paddingBottom: 80,
  },
});

export default styles;
