import { Post, User } from "@/types";
import { formatDate, formatNumber } from "@/utils/formatters";
import { AntDesign, Feather } from "@expo/vector-icons";
//import styles from "@/app/styles/postCard.styles";
//import styles from "@/styles/postCard.styles";
import styles from "@/app/styles/postCard.styles";

import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onDelete: (postId: string) => void;
  onComment: (post: Post) => void;
  isLiked?: boolean;
  currentUser: User;
}

const PostCard = ({
  currentUser,
  onDelete,
  onLike,
  post,
  isLiked,
  onComment,
}: PostCardProps) => {
  const isOwnPost = post.user._id === currentUser._id;

  const handleDelete = () => {
    Alert.alert("Delete Post", "Are you sure you want to delete this post?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => onDelete(post._id),
      },
    ]);
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Avatar */}
        <Image
          source={{ uri: post.user.profilePicture || "" }}
          style={styles.avatar}
        />

        <View style={styles.content}>
          {/* Header */}
          <View style={styles.headerRow}>
            <View style={styles.userRow}>
              <Text style={styles.name}>
                {post.user.firstName} {post.user.lastName}
              </Text>
              <Text style={styles.meta}>
                @{post.user.username} · {formatDate(post.createdAt)}
              </Text>
            </View>

            {isOwnPost && (
              <TouchableOpacity onPress={handleDelete}>
                <Feather name="trash" size={20} color="#657786" />
              </TouchableOpacity>
            )}
          </View>

          {/* Content */}
          {post.content ? (
            <Text style={styles.postText}>{post.content}</Text>
          ) : null}

          {/* Image */}
          {post.image ? (
            <Image
              source={{ uri: post.image }}
              style={styles.postImage}
              resizeMode="cover"
            />
          ) : null}

          {/* Actions */}
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={styles.action}
              onPress={() => onComment(post)}
            >
              <Feather name="message-circle" size={18} color="#657786" />
              <Text style={styles.actionText}>
                {formatNumber(post.comments?.length || 0)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action}>
              <Feather name="repeat" size={18} color="#657786" />
              <Text style={styles.actionText}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.action}
              onPress={() => onLike(post._id)}
            >
              {isLiked ? (
                <AntDesign name="heart" size={18} color="#E0245E" />
              ) : (
                <Feather name="heart" size={18} color="#657786" />
              )}
              <Text style={[styles.actionText, isLiked && styles.likedText]}>
                {formatNumber(post.likes?.length || 0)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Feather name="share" size={18} color="#657786" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
