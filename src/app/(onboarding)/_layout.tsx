import { Stack } from "expo-router";

const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default OnboardingLayout;
