import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="gap-3 p-6 justify-between flex-1"
      style={{
        paddingBottom: bottom + 24,
      }}
    >
      <View className="gap-8 pt-4">
        <Text variant="headlineMedium" className="!font-bold">
          What's your email?
        </Text>
        <TextInput left={<TextInput.Icon icon="email" />}></TextInput>
      </View>
      <Button mode="contained" onPress={() => router.push("/sign-up/name")}>
        Next
      </Button>
    </View>
  );
};

export default SignUpScreen;
