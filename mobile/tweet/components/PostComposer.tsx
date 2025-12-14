import { useCreatePost } from "@/hooks/useCreatePost";
import { useUser } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import styles from "@/app/styles/postComposer.styles";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const PostComposer = () => {
  const {
    content,
    setContent,
    selectedImage,
    isCreating,
    pickImageFromGallery,
    takePhoto,
    removeImage,
    createPost,
  } = useCreatePost();

  const { user } = useUser();

  const isPostEnabled = content.trim().length > 0 || !!selectedImage;

  return (
    <View style={styles.container}>
      {/* Avatar + Input */}
      <View style={styles.row}>
        <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="What's happening?"
            placeholderTextColor="#657786"
            multiline
            value={content}
            onChangeText={setContent}
            maxLength={280}
          />
        </View>
      </View>

      {/* Selected Image */}
      {selectedImage && (
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.selectedImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.removeImageBtn} onPress={removeImage}>
            <Feather name="x" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      {/* Actions */}
      <View style={styles.footer}>
        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={pickImageFromGallery}
            style={styles.iconBtn}
          >
            <Feather name="image" size={20} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhoto} style={styles.iconBtn}>
            <Feather name="camera" size={20} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.postRow}>
          {content.length > 0 && (
            <Text
              style={[
                styles.counter,
                content.length > 260 && styles.counterDanger,
              ]}
            >
              {280 - content.length}
            </Text>
          )}

          <TouchableOpacity
            style={[
              styles.postButton,
              isPostEnabled ? styles.postEnabled : styles.postDisabled,
            ]}
            onPress={createPost}
            disabled={isCreating || !isPostEnabled}
          >
            {isCreating ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text
                style={[
                  styles.postText,
                  !isPostEnabled && styles.postTextDisabled,
                ]}
              >
                Post
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostComposer;
