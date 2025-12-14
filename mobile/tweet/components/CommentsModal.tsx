import { useComments } from "@/hooks/useComments";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Post } from "@/types";
import styles from "@/app/styles/commentsModal.style";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

interface CommentsModalProps {
  selectedPost: Post;
  onClose: () => void;
}

const CommentsModal = ({ selectedPost, onClose }: CommentsModalProps) => {
  const { commentText, setCommentText, createComment, isCreatingComment } =
    useComments();
  const { currentUser } = useCurrentUser();

  const handleClose = () => {
    onClose();
    setCommentText("");
  };

  return (
    <Modal
      visible={!!selectedPost}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comments</Text>
        <View style={styles.headerSpacer} />
      </View>

      {selectedPost && (
        <ScrollView style={styles.container}>
          {/* ORIGINAL POST */}
          <View style={styles.card}>
            <View style={styles.row}>
              <Image
                source={{ uri: selectedPost.user.profilePicture }}
                style={styles.avatarLarge}
              />

              <View style={styles.flex}>
                <View style={styles.nameRow}>
                  <Text style={styles.name}>
                    {selectedPost.user.firstName} {selectedPost.user.lastName}
                  </Text>
                  <Text style={styles.username}>
                    @{selectedPost.user.username}
                  </Text>
                </View>

                {selectedPost.content ? (
                  <Text style={styles.postText}>{selectedPost.content}</Text>
                ) : null}

                {selectedPost.image ? (
                  <Image
                    source={{ uri: selectedPost.image }}
                    style={styles.postImage}
                    resizeMode="cover"
                  />
                ) : null}
              </View>
            </View>
          </View>

          {/* COMMENTS */}
          {selectedPost.comments.map((comment) => (
            <View key={comment._id} style={styles.card}>
              <View style={styles.row}>
                <Image
                  source={{ uri: comment.user.profilePicture }}
                  style={styles.avatarSmall}
                />

                <View style={styles.flex}>
                  <View style={styles.nameRow}>
                    <Text style={styles.name}>
                      {comment.user.firstName} {comment.user.lastName}
                    </Text>
                    <Text style={styles.username}>
                      @{comment.user.username}
                    </Text>
                  </View>

                  <Text style={styles.commentText}>{comment.content}</Text>
                </View>
              </View>
            </View>
          ))}

          {/* ADD COMMENT */}
          <View style={styles.inputContainer}>
            <View style={styles.row}>
              <Image
                source={{ uri: currentUser?.profilePicture }}
                style={styles.avatarSmall}
              />

              <View style={styles.flex}>
                <TextInput
                  style={styles.input}
                  placeholder="Write a comment..."
                  value={commentText}
                  onChangeText={setCommentText}
                  multiline
                  numberOfLines={3}
                  textAlignVertical="top"
                />

                <TouchableOpacity
                  style={[
                    styles.replyButton,
                    commentText.trim()
                      ? styles.replyEnabled
                      : styles.replyDisabled,
                  ]}
                  onPress={() => createComment(selectedPost._id)}
                  disabled={isCreatingComment || !commentText.trim()}
                >
                  {isCreatingComment ? (
                    <ActivityIndicator size="small" color="#fff" />
                  ) : (
                    <Text
                      style={[
                        styles.replyText,
                        !commentText.trim() && styles.replyTextDisabled,
                      ]}
                    >
                      Reply
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </Modal>
  );
};

export default CommentsModal;
