import { router } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginNameScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <KeyboardAvoidingView
      className="gap-3 px-6 pt-2 justify-between flex-1"
      style={{
        paddingBottom: bottom + 24,
      }}
    >
      <View className="gap-8">
        <Text variant="headlineSmall" className="!font-bold">
          Enter your password
        </Text>
        <View className="gap-4">
          <TextInput left={<TextInput.Icon icon="email-outline" />}></TextInput>
          <TextInput
            placeholder="Enter your password here"
            left={<TextInput.Icon icon="lock-outline" />}
          ></TextInput>
          <Text
            className="mt-1"
            style={{
              color: theme.colors.primary,
            }}
          >
            Forgot Password?
          </Text>
        </View>
      </View>
      <Button mode="contained" onPress={() => router.push("/(user)/explore")}>
        Next
      </Button>
    </KeyboardAvoidingView>
  );
};

export default LoginNameScreen;
