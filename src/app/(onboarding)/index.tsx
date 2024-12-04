import React, { useEffect, useRef } from "react";
import { Alert, View } from "react-native";

import SocialButton from "@/common/components/social-button";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import Onboarding from "react-native-onboarding-swiper";
import { Text, useTheme } from "react-native-paper";

const OnboardingScreen = ({ isFromBack }: { isFromBack?: boolean }) => {
  const onboardingRef = useRef<any>(null);
  const theme = useTheme();
  useEffect(() => {
    if (!isFromBack) return;
    if (!onboardingRef) return;
    if (onboardingRef?.current?.goToPage) {
      onboardingRef?.current?.goToPage(1);
    }
  }, [isFromBack]);
  return (
    <Onboarding
      ref={onboardingRef}
      showDone={false}
      showSkip={false}
      onSkip={() => {
        Alert.alert(
          "Skipped",
          "hello",
          [
            {
              text: "Reject",
              onPress: () => Alert.alert("reject pressed"),
              style: "destructive",
            },
            {
              text: "Cancel",
              onPress: () => Alert.alert("cancel pressed"),
              style: "cancel",
            },
          ],
          {
            userInterfaceStyle: "dark",
          }
        );
      }}
      pages={[
        {
          title: (
            <Text variant="titleLarge" className="px-6 !text-center !font-bold">
              Find pros who can do exactly what you need
            </Text>
          ),
          subtitle: "",
          backgroundColor: theme.colors.background,
          image: (
            <Feather name="home" size={120} color={theme.colors.onBackground} />
          ),
        },
        {
          title: (
            <Text variant="titleLarge" className="px-6 !text-center !font-bold">
              Pick your favorite. Chat and hire them through the app.
            </Text>
          ),
          subtitle: "",
          backgroundColor: theme.colors.background,
          image: (
            <Feather name="home" size={120} color={theme.colors.onBackground} />
          ),
        },
        {
          title: (
            <View className="gap-8 px-6">
              <View className="gap-3">
                <Text
                  variant="headlineSmall"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Text>
                <Text variant={"bodyLarge"}>
                  Don't worry, we don't share your contact info with pros.
                </Text>
              </View>
              <View className="social-buttons gap-3">
                <SocialButton></SocialButton>
                <SocialButton></SocialButton>
                <SocialButton></SocialButton>
              </View>
              <View>
                <Link href={"/(auth)/sign-up"}>
                  <Text
                    variant="labelLarge"
                    style={{
                      color: theme.colors.primary,
                    }}
                  >
                    Sign Up with Email
                  </Text>
                </Link>
              </View>
              <View className="mt-4">
                <Text
                  style={{
                    lineHeight: 24,
                  }}
                >
                  By tapping Sign Up with Facebook or email, you agree to the
                  Terms of Use and Privacy Policy
                </Text>
              </View>
            </View>
          ),
          subtitle: "",
          backgroundColor: theme.colors.background,
          image: <></>,
        },
      ]}
    />
  );
};

export default OnboardingScreen;
