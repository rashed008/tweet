import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  searchWrapper: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },

  conversationItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },

  conversationContent: {
    flex: 1,
  },

  conversationTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontWeight: "600",
    color: "#111827",
  },

  username: {
    marginLeft: 6,
    fontSize: 13,
    color: "#6B7280",
  },

  time: {
    fontSize: 12,
    color: "#6B7280",
  },

  lastMessage: {
    fontSize: 14,
    color: "#6B7280",
  },

  footer: {
    padding: 8,
    borderTopWidth: 1,
    borderColor: "#F1F5F9",
    backgroundColor: "#F9FAFB",
  },

  footerText: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
  },

  chatContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  chatHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  chatAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 12,
  },

  chatName: {
    fontWeight: "600",
    fontSize: 16,
  },

  chatUsername: {
    fontSize: 13,
    color: "#6B7280",
  },

  chatBody: {
    flex: 1,
    padding: 16,
  },

  messageRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 16,
  },

  messageFromUser: {
    backgroundColor: "#1DA1F2",
  },

  messageFromOther: {
    backgroundColor: "#E5E7EB",
  },

  messageTextUser: {
    color: "#fff",
  },

  messageTextOther: {
    color: "#111827",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderTopWidth: 1,
    borderColor: "#F1F5F9",
  },

  messageInput: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
  },

  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
