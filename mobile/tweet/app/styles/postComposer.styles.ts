import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  row: {
    flexDirection: "row",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },

  inputWrapper: {
    flex: 1,
  },

  input: {
    fontSize: 18,
    color: "#111827",
  },

  imageWrapper: {
    marginTop: 12,
    marginLeft: 60,
  },

  selectedImage: {
    width: "100%",
    height: 192,
    borderRadius: 16,
  },

  removeImageBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  iconRow: {
    flexDirection: "row",
  },

  iconBtn: {
    marginRight: 16,
  },

  postRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  counter: {
    fontSize: 14,
    color: "#6B7280",
    marginRight: 12,
  },

  counterDanger: {
    color: "#EF4444",
  },

  postButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 999,
  },

  postEnabled: {
    backgroundColor: "#1DA1F2",
  },

  postDisabled: {
    backgroundColor: "#D1D5DB",
  },

  postText: {
    fontWeight: "600",
    color: "#fff",
  },

  postTextDisabled: {
    color: "#6B7280",
  },
});

export default styles;
