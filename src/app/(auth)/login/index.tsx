import SocialButton from "@/common/components/social-button";
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { Divider, Text, TextInput, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const [showNext, setShowNext] = useState(false);
  return (
    <View
      className="gap-3 px-6 pt-2 justify-between flex-1"
      style={{
        paddingBottom: bottom + 24,
      }}
    >
      <View className="gap-8">
        <Text variant="headlineSmall" className="!font-bold">
          What email do you use?
        </Text>
        <TextInput
          onEndEditing={() => {
            router.push("/login/password");
          }}
          placeholder="Enter your email address"
          left={<TextInput.Icon icon="email-outline" />}
        ></TextInput>
        <Divider bold></Divider>
        <SocialButton title="Continue with Facebook"></SocialButton>
      </View>
      <View>
        <Text
          style={{
            lineHeight: 24,
          }}
        >
          By tapping Sign Up with Facebook or email, you agree to the{" "}
          <Text
            style={{
              color: theme.colors.primary,
            }}
            className="underline"
          >
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text
            style={{
              color: theme.colors.primary,
            }}
            className="underline"
          >
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
