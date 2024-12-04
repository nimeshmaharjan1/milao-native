import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpNameScreen = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="gap-3 px-6 pt-2 justify-between flex-1"
      style={{
        paddingBottom: bottom + 24,
      }}
    >
      <View className="gap-8">
        <Text variant="headlineSmall" className="!font-bold">
          What's your name?
        </Text>
        <TextInput left={<TextInput.Icon icon="account-circle" />}></TextInput>
        <TextInput left={<TextInput.Icon icon="account-circle" />}></TextInput>
      </View>
      <Button mode="contained" onPress={() => router.push("/sign-up/name")}>
        Next
      </Button>
    </View>
  );
};

export default SignUpNameScreen;
