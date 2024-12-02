import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login/index"></Stack.Screen>
      <Stack.Screen
        options={{
          title: "Sign Up",
        }}
        name="sign-up"
      ></Stack.Screen>
    </Stack>
  );
};

export default AuthLayout;
