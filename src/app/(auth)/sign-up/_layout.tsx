import { Stack } from "expo-router";
import React from "react";

const SignUpLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: true,
        title: "Sign Up",
      }}
    >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="password/index"></Stack.Screen>
      <Stack.Screen name="name/index"></Stack.Screen>
    </Stack>
  );
};

export default SignUpLayout;
