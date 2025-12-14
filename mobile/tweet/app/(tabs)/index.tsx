import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import SignOutButton from "@/components/SignOutButton";
import { useUserSync } from "@/hooks/useUserSync";
import PostComposer from "@/components/PostComposer";
import PostsList from "@/components/PostsList";
import styles from "../styles/home.styles";

const HomeScreen = () => {
  const [isRefetching, setIsRefetching] = useState(false);

  const handlePullToRefresh = async () => {
    setIsRefetching(true);
    // fetch posts here later
    setIsRefetching(false);
  };

  useUserSync();

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* HEADER (reused & stable) */}
      <View style={styles.header}>
        {/* LEFT ICON */}
        <View style={styles.leftIcon}>
          <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
        </View>

        {/* CENTER TITLE */}
        <Text style={styles.headerTitle}>Home</Text>

        {/* RIGHT BUTTON */}
        <View style={styles.rightButton}>
          <SignOutButton />
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={handlePullToRefresh}
            tintColor="#1DA1F2"
          />
        }
      >
        <PostComposer />
        <PostsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
