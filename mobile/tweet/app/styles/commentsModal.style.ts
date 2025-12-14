import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  closeText: {
    color: "#1DA1F2",
    fontSize: 16,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },

  headerSpacer: {
    width: 48,
  },

  card: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
    padding: 16,
  },

  row: {
    flexDirection: "row",
  },

  flex: {
    flex: 1,
  },

  avatarLarge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },

  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    flexWrap: "wrap",
  },

  name: {
    fontWeight: "700",
    color: "#111827",
    marginRight: 4,
  },

  username: {
    color: "#6B7280",
    fontSize: 13,
  },

  postText: {
    fontSize: 16,
    color: "#111827",
    lineHeight: 20,
    marginBottom: 12,
  },

  commentText: {
    fontSize: 15,
    color: "#111827",
    lineHeight: 20,
  },

  postImage: {
    width: "100%",
    height: 192,
    borderRadius: 16,
    marginBottom: 8,
  },

  inputContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#F1F5F9",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },

  replyButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  replyEnabled: {
    backgroundColor: "#1DA1F2",
  },

  replyDisabled: {
    backgroundColor: "#D1D5DB",
  },

  replyText: {
    fontWeight: "600",
    color: "#fff",
  },

  replyTextDisabled: {
    color: "#6B7280",
  },
});
export default styles;
