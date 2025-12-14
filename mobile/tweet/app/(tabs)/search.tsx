import { Feather } from "@expo/vector-icons";
import { styles } from "../styles/search.styles";

import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TRENDING_TOPICS = [
  { topic: "#ReactNative", tweets: "125K" },
  { topic: "#TypeScript", tweets: "89K" },
  { topic: "#WebDevelopment", tweets: "234K" },
  { topic: "#AI", tweets: "567K" },
  { topic: "#TechNews", tweets: "98K" },
];

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#657786" />
          <TextInput
            placeholder="Search in X"
            placeholderTextColor="#657786"
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Trending for you</Text>

          {TRENDING_TOPICS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.trendingItem}>
              <Text style={styles.subText}>Trending in Technology</Text>
              <Text style={styles.topic}>{item.topic}</Text>
              <Text style={styles.subText}>{item.tweets} Tweets</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
