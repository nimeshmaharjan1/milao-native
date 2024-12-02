import "@/app/global.css";
import UIProvider from "@/common/providers/ui-provider";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <UIProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index"></Stack.Screen>
          <Stack.Screen name="(onboarding)" />
          <Stack.Screen name="(user)" />
        </Stack>
      </UIProvider>
    </SafeAreaProvider>
  );
}
