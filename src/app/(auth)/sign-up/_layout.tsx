import { router, Stack } from "expo-router";
import React from "react";
import { Appbar } from "react-native-paper";

const SignUpLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: () => {
          return (
            <Appbar.Header>
              <Appbar.BackAction onPress={() => router.back()} />
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="password/index"></Stack.Screen>
      <Stack.Screen name="name/index"></Stack.Screen>
    </Stack>
  );
};

export default SignUpLayout;
