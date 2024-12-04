import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpPasswordScreen = () => {
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
          Create a Password
        </Text>
        <TextInput left={<TextInput.Icon icon="lock" />}></TextInput>
      </View>
      <Button mode="contained" onPress={() => router.push("/sign-up/name")}>
        Next
      </Button>
    </View>
  );
};

export default SignUpPasswordScreen;
