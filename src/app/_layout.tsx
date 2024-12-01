import "@/app/global.css";
import UIProvider from "@/common/providers/ui-provider";
import { SplashScreen, Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const handleOnLayout = useCallback(() => {
    if (isMounted) {
      SplashScreen.hideAsync();
    }
  }, [isMounted]);
  return (
    <SafeAreaProvider onLayout={handleOnLayout}>
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
