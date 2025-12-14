import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  row: {
    flexDirection: "row",
    padding: 16,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  name: {
    fontWeight: "700",
    color: "#111827",
    marginRight: 4,
  },

  meta: {
    color: "#6B7280",
    fontSize: 13,
  },

  postText: {
    fontSize: 16,
    color: "#111827",
    lineHeight: 20,
    marginBottom: 12,
  },

  postImage: {
    width: "100%",
    height: 192,
    borderRadius: 16,
    marginBottom: 12,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 280,
  },

  action: {
    flexDirection: "row",
    alignItems: "center",
  },

  actionText: {
    fontSize: 14,
    color: "#6B7280",
    marginLeft: 6,
  },

  likedText: {
    color: "#E0245E",
  },
});

export default styles;
