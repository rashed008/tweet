import { useSocialAuth } from "@/hooks/useSocialAuth";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { handleSocilaAuth, isLoading } = useSocialAuth();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* TRUE CENTER CONTAINER */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        {/* CONTENT BLOCK */}
        <View style={{ width: "100%", maxWidth: 320, alignItems: "center" }}>
          {/* LOGO */}
          <Image
            source={require("../../assets/images/auth2.png")}
            style={{ width: 200, height: 80, marginBottom: 40 }}
            resizeMode="contain"
          />

          {/* GOOGLE */}
          <TouchableOpacity
            onPress={() => handleSocilaAuth("oauth_google")}
            disabled={isLoading}
            style={{
              width: "100%",
              height: 48,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: "#d1d5db",
              backgroundColor: "#fff",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 14,
              elevation: 2,
            }}
          >
            {isLoading ? (
              <ActivityIndicator color="#4285F4" />
            ) : (
              <>
                <Image
                  source={require("../../assets/images/google.png")}
                  style={{ width: 22, height: 22, marginRight: 10 }}
                />
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  Continue with Google
                </Text>
              </>
            )}
          </TouchableOpacity>

          {/* APPLE */}
          <TouchableOpacity
            onPress={() => handleSocilaAuth("oauth_apple")}
            disabled={isLoading}
            style={{
              width: "100%",
              height: 48,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: "#d1d5db",
              backgroundColor: "#fff",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              elevation: 2,
            }}
          >
            {isLoading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <>
                <Image
                  source={require("../../assets/images/apple.png")}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  Continue with Apple
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
