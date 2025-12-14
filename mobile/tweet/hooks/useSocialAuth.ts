import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

type Provider = "oauth_google" | "oauth_apple";

export const useSocialAuth = () => {
  const [loadingProvider, setLoadingProvider] = useState<Provider | null>(null);
  const { startSSOFlow } = useSSO();

  const handleSocilaAuth = async (strategy: Provider) => {
    setLoadingProvider(strategy);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.log("Error in social auth", err);

      const provider = strategy === "oauth_google" ? "Google" : "Apple";
      Alert.alert(
        "Error",
        `Failed to sign in with ${provider}. Please try again.`
      );
    } finally {
      setLoadingProvider(null);
    }
  };

  return {
    loadingProvider,
    handleSocilaAuth,
  };
};
