import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loaderContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

  headerSubtitle: {
    fontSize: 14,
    color: "#6B7280",
  },

  banner: {
    width: "100%",
    height: 192,
  },

  profileSection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  avatarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: -64,
    marginBottom: 16,
  },

  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: "#fff",
  },

  editButton: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 999,
  },

  editButtonText: {
    fontWeight: "600",
    color: "#111827",
  },

  infoBlock: {
    marginTop: 8,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginRight: 6,
  },

  username: {
    color: "#6B7280",
    marginBottom: 8,
  },

  bio: {
    color: "#111827",
    marginBottom: 12,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  metaText: {
    marginLeft: 8,
    color: "#6B7280",
  },

  followRow: {
    flexDirection: "row",
    marginTop: 8,
  },

  followItem: {
    marginRight: 24,
  },

  followCount: {
    fontWeight: "700",
    color: "#111827",
  },

  followLabel: {
    color: "#6B7280",
  },
});

export default styles;
