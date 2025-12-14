import { CONVERSATIONS, ConversationType } from "@/data/conversations";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import styles from "../styles/messages.styles";

import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const MessagesScreen = () => {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("");
  const [conversationsList, setConversationsList] = useState(CONVERSATIONS);
  const [selectedConversation, setSelectedConversation] =
    useState<ConversationType | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const deleteConversation = (conversationId: number) => {
    Alert.alert(
      "Delete Conversation",
      "Are you sure you want to delete this conversation?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setConversationsList((prev) =>
              prev.filter((conv) => conv.id !== conversationId)
            );
          },
        },
      ]
    );
  };

  const openConversation = (conversation: ConversationType) => {
    setSelectedConversation(conversation);
    setIsChatOpen(true);
  };

  const closeChatModal = () => {
    setIsChatOpen(false);
    setSelectedConversation(null);
    setNewMessage("");
  };

  const sendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      setConversationsList((prev) =>
        prev.map((conv) =>
          conv.id === selectedConversation.id
            ? { ...conv, lastMessage: newMessage, time: "now" }
            : conv
        )
      );
      setNewMessage("");
      Alert.alert(
        "Message Sent",
        `Your message has been sent to ${selectedConversation.user.name}`
      );
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <Feather name="edit" size={24} color="#1DA1F2" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#657786" />
          <TextInput
            placeholder="Search for people and groups"
            placeholderTextColor="#657786"
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Conversation List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100 + insets.bottom,
        }}
      >
        {conversationsList.map((conversation) => (
          <TouchableOpacity
            key={conversation.id}
            style={styles.conversationItem}
            onPress={() => openConversation(conversation)}
            onLongPress={() => deleteConversation(conversation.id)}
          >
            <Image
              source={{ uri: conversation.user.avatar }}
              style={styles.avatar}
            />

            <View style={styles.conversationContent}>
              <View style={styles.conversationTopRow}>
                <View style={styles.nameRow}>
                  <Text style={styles.name}>{conversation.user.name}</Text>
                  {conversation.user.verified && (
                    <Feather
                      name="check-circle"
                      size={16}
                      color="#1DA1F2"
                      style={{ marginLeft: 4 }}
                    />
                  )}
                  <Text style={styles.username}>
                    @{conversation.user.username}
                  </Text>
                </View>
                <Text style={styles.time}>{conversation.time}</Text>
              </View>

              <Text style={styles.lastMessage} numberOfLines={1}>
                {conversation.lastMessage}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer Hint */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tap to open • Long press to delete
        </Text>
      </View>

      {/* Chat Modal */}
      <Modal visible={isChatOpen} animationType="slide">
        {selectedConversation && (
          <SafeAreaView style={styles.chatContainer}>
            {/* Chat Header */}
            <View style={styles.chatHeader}>
              <TouchableOpacity onPress={closeChatModal}>
                <Feather name="arrow-left" size={24} color="#1DA1F2" />
              </TouchableOpacity>

              <Image
                source={{ uri: selectedConversation.user.avatar }}
                style={styles.chatAvatar}
              />

              <View>
                <Text style={styles.chatName}>
                  {selectedConversation.user.name}
                </Text>
                <Text style={styles.chatUsername}>
                  @{selectedConversation.user.username}
                </Text>
              </View>
            </View>

            {/* Messages */}
            <ScrollView style={styles.chatBody}>
              {selectedConversation.messages.map((message) => (
                <View
                  key={message.id}
                  style={[
                    styles.messageRow,
                    message.fromUser && { justifyContent: "flex-end" },
                  ]}
                >
                  <View
                    style={[
                      styles.messageBubble,
                      message.fromUser
                        ? styles.messageFromUser
                        : styles.messageFromOther,
                    ]}
                  >
                    <Text
                      style={
                        message.fromUser
                          ? styles.messageTextUser
                          : styles.messageTextOther
                      }
                    >
                      {message.text}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Input */}
            <View style={styles.inputRow}>
              <TextInput
                placeholder="Start a message..."
                placeholderTextColor="#657786"
                value={newMessage}
                onChangeText={setNewMessage}
                style={styles.messageInput}
                multiline
              />
              <TouchableOpacity
                onPress={sendMessage}
                disabled={!newMessage.trim()}
                style={[
                  styles.sendButton,
                  {
                    backgroundColor: newMessage.trim() ? "#1DA1F2" : "#CBD5E1",
                  },
                ]}
              >
                <Feather name="send" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )}
      </Modal>
    </SafeAreaView>
  );
};

export default MessagesScreen;
